import Link from 'next/link';
import styles from './page.module.css';
import FadeIn from '@/components/FadeIn';
import { Metadata } from 'next';
import { ArrowRight, Globe, Smartphone, Monitor, Briefcase, Cpu } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Engineering Services | Niena Labs',
    description: 'High-level breakdown of our engineering, consultation, and research services.',
};

export default function ServicesPage() {
    return (
        <div className="container">
            <section className={styles.servicesHeader}>
                <FadeIn delay={0.1}>
                    <h1 className={styles.title}>Services Overview</h1>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className={styles.subtitle}>
                        Use us for the things you can&apos;t Google. From core engineering to strategic consultation.
                    </p>
                </FadeIn>
            </section>

            {/* 1. Engineering Services */}
            <section className="section" style={{ paddingBottom: '2rem' }}>
                <FadeIn>
                    <h2 className="text-title" style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                        Engineering
                    </h2>
                </FadeIn>
                <div className={styles.serviceList}>
                    {/* Web */}
                    <FadeIn delay={0.1}>
                        <Link href="/services/web-development" className={styles.serviceItem}>
                            <div>
                                <div style={{ marginBottom: '1rem', color: 'var(--brand-primary)' }}><Globe size={32} /></div>
                                <h3 className={styles.serviceTitle}>Web Development</h3>
                                <p className={styles.serviceDesc}>
                                    SaaS platforms, complex dashboards, and internal tools that your team will actually enjoy using.
                                </p>
                            </div>
                            <span className={styles.serviceLink}>Explore Web <ArrowRight size={16} /></span>
                        </Link>
                    </FadeIn>

                    {/* Mobile */}
                    <FadeIn delay={0.2}>
                        <Link href="/services/mobile-development" className={styles.serviceItem}>
                            <div>
                                <div style={{ marginBottom: '1rem', color: 'var(--brand-primary)' }}><Smartphone size={32} /></div>
                                <h3 className={styles.serviceTitle}>Mobile Apps</h3>
                                <p className={styles.serviceDesc}>
                                    iOS and Android apps that work offline and feel instant.
                                </p>
                            </div>
                            <span className={styles.serviceLink}>Explore Mobile <ArrowRight size={16} /></span>
                        </Link>
                    </FadeIn>

                    {/* Desktop */}
                    <FadeIn delay={0.3}>
                        <Link href="/services/desktop-development" className={styles.serviceItem}>
                            <div>
                                <div style={{ marginBottom: '1rem', color: 'var(--brand-primary)' }}><Monitor size={32} /></div>
                                <h3 className={styles.serviceTitle}>Desktop Applications</h3>
                                <p className={styles.serviceDesc}>
                                    Native tools for Windows, macOS, and Linux. When a browser tab isn&apos;t enough.
                                </p>
                            </div>
                            <span className={styles.serviceLink}>Explore Desktop <ArrowRight size={16} /></span>
                        </Link>
                    </FadeIn>
                </div>
            </section>

            {/* 2. Consultation & Architecture */}
            <section className="section" style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
                <FadeIn>
                    <h2 className="text-title" style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                        Consultation
                    </h2>
                </FadeIn>
                <div className={styles.serviceList} style={{ gridTemplateColumns: '1fr' }}>
                    {/* Startup Consultation */}
                    <FadeIn delay={0.1}>
                        <Link href="/services/startup-consultation" className={styles.serviceItem}>
                            <div>
                                <div style={{ marginBottom: '1rem', color: 'var(--brand-primary)' }}><Briefcase size={32} /></div>
                                <h3 className={styles.serviceTitle}>Startup Consultation</h3>
                                <p className={styles.serviceDesc}>
                                    We act as your technical co-founders. Idea validation, MVP architecture, and scaling guidance.
                                </p>
                            </div>
                            <span className={styles.serviceLink}>Explore Consultation <ArrowRight size={16} /></span>
                        </Link>
                    </FadeIn>
                </div>
            </section>

            {/* 3. Research & Low-Level */}
            <section className="section" style={{ paddingTop: '2rem' }}>
                <FadeIn>
                    <h2 className="text-title" style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                        Research
                    </h2>
                </FadeIn>
                <div className={styles.serviceList} style={{ gridTemplateColumns: '1fr' }}>
                    {/* Low Level */}
                    <FadeIn delay={0.1}>
                        <Link href="/services/low-level-systems" className={styles.serviceItem}>
                            <div>
                                <div style={{ marginBottom: '1rem', color: 'var(--brand-primary)' }}><Cpu size={32} /></div>
                                <h3 className={styles.serviceTitle}>Low-Level & Complex Systems</h3>
                                <p className={styles.serviceDesc}>
                                    Performance-critical software, compilers, and security. The stuff that keeps the lights on.
                                </p>
                            </div>
                            <span className={styles.serviceLink}>Explore Systems <ArrowRight size={16} /></span>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
