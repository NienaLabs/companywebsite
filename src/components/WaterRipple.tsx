'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SIM_VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const SIM_FRAGMENT_SHADER = `
  uniform sampler2D iChannel0;
  uniform vec3 iResolution;
  uniform vec4 iMouse;
  uniform int iFrame;
  uniform float delta;
  varying vec2 vUv;

  void main() {
    vec2 fragCoord = vUv * iResolution.xy;
    
    if (iFrame == 0) {
      gl_FragColor = vec4(0.0);
      return;
    }

    // Use texture2D with offset for neighbor sampling to simulate texelFetch
    vec2 pixel = 1.0 / iResolution.xy;
    
    float pressure = texture2D(iChannel0, vUv).x;
    float pVel = texture2D(iChannel0, vUv).y;

    float p_right = texture2D(iChannel0, vUv + vec2(pixel.x, 0.0)).x;
    float p_left = texture2D(iChannel0, vUv + vec2(-pixel.x, 0.0)).x;
    float p_up = texture2D(iChannel0, vUv + vec2(0.0, pixel.y)).x;
    float p_down = texture2D(iChannel0, vUv + vec2(0.0, -pixel.y)).x;

    // Boundary conditions (clamp to edge)
    if (vUv.x <= pixel.x) p_left = p_right;
    if (vUv.x >= 1.0 - pixel.x) p_right = p_left;
    if (vUv.y <= pixel.y) p_down = p_up;
    if (vUv.y >= 1.0 - pixel.y) p_up = p_down;

    // Apply horizontal wave function
    pVel += delta * (-2.0 * pressure + p_right + p_left) / 4.0;
    // Apply vertical wave function
    pVel += delta * (-2.0 * pressure + p_up + p_down) / 4.0;

    // Change pressure by pressure velocity
    pressure += delta * pVel;

    // "Spring" motion
    pVel -= 0.005 * delta * pressure;

    // Velocity damping
    pVel *= 1.0 - 0.002 * delta;

    // Pressure damping
    pressure *= 0.999;

    // Mouse interaction
    // Match user's parameters: smaller brush (20.0), lower intensity (1.0)
    if (iMouse.z > 0.0) {
      float dist = distance(fragCoord, iMouse.xy);
      if (dist <= 20.0) { 
        pressure += 1.0 - dist / 20.0; 
      }
    }
    
    gl_FragColor = vec4(pressure, pVel, (p_right - p_left) / 2.0, (p_up - p_down) / 2.0);
  }
`;

const RENDER_VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const RENDER_FRAGMENT_SHADER = `
  uniform sampler2D iChannel0;
  uniform vec3 iResolution;
  varying vec2 vUv;

  void main() {
    vec4 data = texture2D(iChannel0, vUv);
    
    // Calculate normal from gradient (data.zw)
    // Sharpen the normal for smaller ripples
    vec3 normal = normalize(vec3(-data.z * 5.0, 1.0, -data.w * 5.0)); 
    
    // Light direction
    vec3 lightDir = normalize(vec3(-0.5, 0.8, 0.5));
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    vec3 halfDir = normalize(lightDir + viewDir);
    
    // Specular highlight (Blinn-Phong)
    float specular = pow(max(0.0, dot(normal, halfDir)), 60.0);
    
    // Fresnel / Refraction approximation
    float deviation = 1.0 - dot(normal, vec3(0.0, 1.0, 0.0));
    
    // Water Color (Subtle Blue/Teal)
    // Make it more transparent/glassy, less opaque paint
    vec3 waterColor = vec3(0.4, 0.7, 0.9);
    
    // Final Color
    // Mostly specular + slight color tint on edges
    vec3 col = waterColor * deviation * 2.0 + vec3(1.0) * specular;

    // Alpha:
    // Low base alpha, higher on edges (deviation) and highlights
    float alpha = smoothstep(0.0, 0.002, deviation) * 0.3 + specular;
    
    // Clamp alpha
    alpha = min(alpha, 0.8);
    
    gl_FragColor = vec4(col, alpha);
  }
`;

export default function WaterRipple() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Setup Render Targets (Ping-Pong)
    // We need two targets to swap between reading and writing for the simulation
    const targetA = new THREE.WebGLRenderTarget(width, height, {
      type: THREE.FloatType, // Needed for precision in physics simulation
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
    });
    const targetB = targetA.clone();

    let readTarget = targetA;
    let writeTarget = targetB;

    // 3. Simulation Shader (Buffer A)
    const simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        iChannel0: { value: null },
        iResolution: { value: new THREE.Vector3(width, height, 0) },
        iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
        iFrame: { value: 0 },
        delta: { value: 1.0 },
      },
      vertexShader: SIM_VERTEX_SHADER,
      fragmentShader: SIM_FRAGMENT_SHADER,
    });

    // 4. Render Shader (Image)
    const renderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        iChannel0: { value: null }, // The simulation result
        iResolution: { value: new THREE.Vector3(width, height, 0) },
      },
      vertexShader: RENDER_VERTEX_SHADER,
      fragmentShader: RENDER_FRAGMENT_SHADER,
      transparent: true,
    });

    // Full screen quad
    const plane = new THREE.PlaneGeometry(2, 2);
    const quad = new THREE.Mesh(plane, simMaterial);
    scene.add(quad);

    // 5. Event Listeners
    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = container.getBoundingClientRect();
      
      // Check if mouse is inside the container
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        // Mouse is outside, treat as inactive
        simMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
        return;
      }

      const x = e.clientX - rect.left;
      const y = height - (e.clientY - rect.top); // Flip Y for shader coords
      simMaterial.uniforms.iMouse.value.set(x, y, 1, 1); // z=1 implies click/active
    };

    const onMouseLeave = () => {
       // Immediately stop interaction
       simMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
       // Force clear pressure in next frame if needed, but damping handles it fast.
       // To "stop immediately", we can reset the frame or clear the buffer.
       // Let's clear the buffer by rendering black to it.
       renderer.setRenderTarget(readTarget);
       renderer.clear();
       renderer.setRenderTarget(writeTarget);
       renderer.clear();
       renderer.setRenderTarget(null);
    };

    const onResize = () => {
        if (!containerRef.current) return;
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight;
        
        renderer.setSize(newWidth, newHeight);
        
        // Resize render targets
        targetA.setSize(newWidth, newHeight);
        targetB.setSize(newWidth, newHeight);
        
        // Update uniforms
        const res = new THREE.Vector3(newWidth, newHeight, 0);
        simMaterial.uniforms.iResolution.value = res;
        renderMaterial.uniforms.iResolution.value = res;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
    // container.addEventListener('mouseleave', onMouseLeave); // This doesn't fire on window scroll effectively

    // Intersection Observer to stop simulation when out of view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
           // Left viewport, clear everything
           onMouseLeave();
        }
      });
    }, { threshold: 0 });
    
    observer.observe(container);

    // 6. Animation Loop
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      // 1. Simulation Step
      quad.material = simMaterial;
      simMaterial.uniforms.iFrame.value = frame;
      simMaterial.uniforms.iChannel0.value = readTarget.texture;
      
      renderer.setRenderTarget(writeTarget);
      renderer.render(scene, camera);

      // Swap targets
      const temp = readTarget;
      readTarget = writeTarget;
      writeTarget = temp;

      // 2. Render Step to Screen
      quad.material = renderMaterial;
      renderMaterial.uniforms.iChannel0.value = readTarget.texture;
      
      renderer.setRenderTarget(null); // Render to screen
      renderer.render(scene, camera);

      frame++;
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      targetA.dispose();
      targetB.dispose();
      plane.dispose();
      simMaterial.dispose();
      renderMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 50, // Higher z-index to be on top of text (FadeIn usually has auto or 0)
        pointerEvents: 'none', 
        overflow: 'hidden',
        // This creates the "distortion" look on text
      }} 
    />
  );
}
