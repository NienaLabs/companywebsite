import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from '../page.module.css';

export default function LowLevelSystemsPage() {
    return (
        <>
            <div className={styles.detailHeader}>
                <div className="container">
                    <FadeIn>
                        <h1 className={styles.detailTitle}>Low-Level & Complex Systems</h1>
                        <p className="text-body" style={{ fontSize: '1.25rem', maxWidth: '800px' }}>
                            Engineering where the manual ends. We go deep into the stack.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container">
                <div className={styles.detailContent}>
                    <div>
                        <FadeIn delay={0.1}>
                            {/* Bold Statement */}
                            <div style={{ marginBottom: '3rem', padding: '1.5rem', borderLeft: '4px solid var(--brand-primary)', background: 'rgba(124, 92, 255, 0.05)' }}>
                                <p className="text-body" style={{ color: 'var(--text-primary)', fontStyle: 'italic' }}>
                                    This service is rare. We include it because our team is passionate about how computers actually work, not just how to glue APIs together.
                                </p>
                            </div>

                            {/* Section: Areas */}
                            <h2 className="text-title" style={{ marginBottom: '1rem' }}>Capabilities</h2>
                            <ul className={styles.serviceDesc} style={{ listStyle: 'none', padding: 0, marginBottom: '3rem' }}>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.25rem' }}>Systems Programming</strong>
                                    Memory-safe, high-concurrency applications using Rust and C++.
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.25rem' }}>Performance-Critical Software</strong>
                                    When milliseconds equate to lost revenue, we optimize the critical path.
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.25rem' }}>Compilers, Kernels, & Tooling</strong>
                                    Building developer tools and language infrastructure.
                                </li>
                                <li>
                                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.25rem' }}>Security-Sensitive Systems</strong>
                                    Cryptography implementations (libsodium/ring) and secure enclaves.
                                </li>
                            </ul>

                            {/* Section: Who is this for */}
                            <h2 className="text-title" style={{ marginBottom: '1rem' }}>Who This Is For</h2>
                            <p className="text-body">
                                Serious clients only. This typically involves R&D departments, specialized startups, or legacy modernization projects requiring extreme technical competence.
                            </p>

                        </FadeIn>
                    </div>

                    <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-subtle)', alignSelf: 'start' }}>
                        <FadeIn delay={0.2}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Specialized</h3>
                            <p className="text-small" style={{ marginBottom: '1.5rem' }}>
                                Requires initial technical discovery phase.
                            </p>
                            <Link href="/contact" className="primaryButton" style={{ width: '100%', textAlign: 'center' }}>
                                Contact Engineering
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </>
    );
}
