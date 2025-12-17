import Link from 'next/link';
import styles from './page.module.css';
import FadeIn from '@/components/FadeIn';
import { ArrowRight, Code2, Cpu, Globe, Rocket, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function Home() {
  return (
    <div className="container">
      {/* 1. Hero */}
      <section className={styles.hero}>
        <FadeIn delay={0.1}>
          <h1 className={styles.heroTitle}>
            We build software for the problems that actually matter.
          </h1>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Work With Us
            </Link>
            <Link href="https://app.nienalabs.com" className={styles.secondaryButton} style={{ borderColor: 'var(--brand-primary)', color: 'var(--brand-primary)' }}>
              Try Niena
            </Link>
            <Link href="/products" className={styles.secondaryButton} style={{ border: 'none', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
              All Products
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 2. What We Do */}
      <section className="section">
        <FadeIn>
          <h2 className="text-title">What We Do.</h2>
        </FadeIn>
        <div className={styles.grid}>
          <FadeIn delay={0.1}>
            <div className={styles.card}>
              <div style={{ marginBottom: '1rem', color: 'var(--brand-primary)' }}><Code2 size={32} /></div>
              <div>
                <h3 className={styles.cardTitle}>Engineering Services</h3>
                <p className={styles.cardText}>
                  We build the heavy lifting stuff. Scalable platforms, internal tools, and systems that don&apos;t break when you scale.
                </p>
              </div>
              <Link href="/services" className="text-small hover-underline" style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                See Services <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className={styles.card}>
              <div style={{ marginBottom: '1rem', color: 'var(--brand-primary)' }}><Rocket size={32} /></div>
              <div>
                <h3 className={styles.cardTitle}>Products & Tools</h3>
                <p className={styles.cardText}>
                  We build our own tools to solve our own headaches. Then we release them to you.
                </p>
              </div>
              <Link href="/products" className="text-small hover-underline" style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                View Products <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className={styles.card}>
              <div style={{ marginBottom: '1rem', color: 'var(--brand-primary)' }}><Globe size={32} /></div>
              <div>
                <h3 className={styles.cardTitle}>Open-Source</h3>
                <p className={styles.cardText}>
                  We give back. Robust libraries and utilities that move the engineering community forward.
                </p>
              </div>
              <Link href="/open-source" className="text-small hover-underline" style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Explore Code <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className={styles.card}>
              <div style={{ marginBottom: '1rem', color: 'var(--brand-primary)' }}><Cpu size={32} /></div>
              <div>
                <h3 className={styles.cardTitle}>Research & Low-Level</h3>
                <p className={styles.cardText}>
                  We like the hard stuff. Deep-dive explorations into systems, compilers, and AI.
                </p>
              </div>
              <Link href="/experiments" className="text-small hover-underline" style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                See Labs <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Problems We Focus On */}
      <section className="section">
        <div className={styles.splitSection}>
          <div className={styles.splitContent}>
            <FadeIn>
              <h2 className="text-title">Problems We Solve.</h2>
              <p className="text-body" style={{ marginTop: '1rem', maxWidth: '500px' }}>
                We don&apos;t chase trends. You won&apos;t see us pivoting to the &quot;Next Big Thing&quot; every week. We tackle the boring, difficult obstacles that keep businesses from growing.
              </p>
            </FadeIn>
          </div>
          <div className={styles.splitContent}>
            <ul className={styles.list}>
              <FadeIn delay={0.1} direction="left">
                <li className={styles.listItem}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Zap size={24} color="var(--brand-primary)" />
                    <strong>Scalability Bottlenecks</strong>
                  </div>
                  <span>Reliability</span>
                </li>
              </FadeIn>
              <FadeIn delay={0.2} direction="left">
                <li className={styles.listItem}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Layers size={24} color="var(--brand-primary)" />
                    <strong>Complex Workflows</strong>
                  </div>
                  <span>Internal Tools</span>
                </li>
              </FadeIn>
              <FadeIn delay={0.3} direction="left">
                <li className={styles.listItem}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Cpu size={24} color="var(--brand-primary)" />
                    <strong>Performance Issues</strong>
                  </div>
                  <span>Optimization</span>
                </li>
              </FadeIn>
              <FadeIn delay={0.4} direction="left">
                <li className={styles.listItem}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <ShieldCheck size={24} color="var(--brand-primary)" />
                    <strong>Legacy Migration</strong>
                  </div>
                  <span>Modernization</span>
                </li>
              </FadeIn>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Capabilities */}
      <section className="section">
        <FadeIn>
          <h2 className="text-title">Our Capabilities.</h2>
        </FadeIn>
        <div className={styles.grid}>
          {[
            { icon: <Globe size={28} />, title: 'Web & Mobile', text: 'Full-stack apps that feel native. React, Next.js, and Node.js.' },
            { icon: <Cpu size={28} />, title: 'AI & ML', text: 'Real intelligence, not just buzzwords. Integrating models into real workflows.' },
            { icon: <Code2 size={28} />, title: 'Systems Engineering', text: 'Low-level code for when speed matters more than anything else.' },
            { icon: <Layers size={28} />, title: 'Infrastructure', text: 'Cloud architecture that scales with you, not against you.' }
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className={styles.card}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ color: 'var(--brand-primary)' }}>{item.icon}</div>
                  <h3 className={styles.cardTitle} style={{ marginBottom: 0 }}>{item.title}</h3>
                </div>
                <p className={styles.cardText}>{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 5. Featured Work */}
      <section className="section">
        <FadeIn>
          <h2 className="text-title">Featured Work.</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className={styles.project}>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Niena</h3>
              <p className="text-body" style={{ marginBottom: '2rem' }}>
                Our flagship AI Career Assistant. Helping people get hired faster with intelligent resume optimization and interview prep.
              </p>
              <Link href="/products/niena" className={styles.secondaryButton}>
                View Study
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 6. Who We Work With */}
      <section className="section" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <FadeIn>
          <h2 className="text-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Who We Work With.</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', opacity: 0.7 }}>
            <span className="text-subtitle">Startups</span>
            <span className="text-subtitle">Enterprises</span>
            <span className="text-subtitle">Institutions</span>
            <span className="text-subtitle">Builder Teams</span>
          </div>
        </FadeIn>
      </section>

      {/* 7. Philosophy */}
      <section className="section">
        <FadeIn>
          <div className={styles.philosophy}>
            <h2 className="text-title">Our Philosophy.</h2>
            <p className={styles.philosophyText}>
              We believe in code that lasts. We don&apos;t just ship features; we build foundations.
              If you&apos;re looking for quick hacks, we&apos;re not the right fit.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 8. Final CTA */}
      <section className={styles.ctaSection}>
        <FadeIn>
          <h2 className={styles.ctaTitle}>Let’s build something real.</h2>
          <Link href="/contact" className={styles.primaryButton}>
            Start a Conversation
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
