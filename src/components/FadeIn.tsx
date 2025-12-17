'use client';

import { useEffect, useRef, useState } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: 'up' | 'left' | 'right' | 'none';
}

export default function FadeIn({
    children,
    delay = 0,
    className = '',
    direction = 'up'
}: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, { threshold: 0.1 });

        const { current } = domRef;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    const getTransform = () => {
        if (!isVisible) {
            switch (direction) {
                case 'up': return 'translateY(20px)';
                case 'left': return 'translateX(-20px)';
                case 'right': return 'translateX(20px)';
                default: return 'none';
            }
        }
        return 'none';
    };

    return (
        <div
            ref={domRef}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transition: `opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </div>
    );
}
