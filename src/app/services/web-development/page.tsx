import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from '../page.module.css';

export default function WebDevelopmentPage() {
    return (
        <>
            <div className={styles.detailHeader}>
                <div className="container">
                    <FadeIn>
                        <h1 className={styles.detailTitle}>Web Development</h1>
                        <p className="text-body" style={{ fontSize: '1.25rem', maxWidth: '800px' }}>
                            Depth and seriousness in every line of code. We build robust web software, not just websites.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container">
                <div className={styles.detailContent}>
                    <div>
                        <FadeIn delay={0.1}>
                            {/* Section: What we build */}
                            <h2 className="text-title" style={{ marginBottom: '1rem' }}>What We Build</h2>
                            <p className="text-body" style={{ marginBottom: '2rem' }}>
                                We specialize in high-complexity web applications:
                            </p>
                            <ul className={styles.serviceDesc} style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '3rem' }}>
                                <li><strong>SaaS Platforms:</strong> Scalable multi-tenant architectures.</li>
                                <li><strong>Dashboards:</strong> Data-heavy visualization and management interfaces.</li>
                                <li><strong>Internal Tools:</strong> Workflow automation for enterprise operations.</li>
                            </ul>

                            {/* Section: Performance & Scalability */}
                            <h2 className="text-title" style={{ marginBottom: '1rem' }}>Performance & Scalability</h2>
                            <p className="text-body" style={{ marginBottom: '3rem' }}>
                                Speed is not an afterthought. We design for high concurrency and low latency from the database schema up to the React render cycle.
                            </p>

                            {/* Section: Example Projects */}
                            <h2 className="text-title" style={{ marginBottom: '1rem' }}>Example Projects</h2>
                            <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ padding: '1.5rem', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
                                    <h4 style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Niena Cloud</h4>
                                    <p className="text-small" style={{ marginTop: '0.5rem' }}>Enterprise resource planning dashboard handling 10k+ concurrent streams.</p>
                                </div>
                                <div style={{ padding: '1.5rem', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
                                    <h4 style={{ fontWeight: 600, color: 'var(--text-primary)' }}>AlgoTrade Interface</h4>
                                    <p className="text-small" style={{ marginTop: '0.5rem' }}>Real-time financial data visualization with sub-millisecond updates.</p>
                                </div>
                            </div>

                        </FadeIn>
                    </div>

                    {/* Sidebar: Technologies & CTA */}
                    <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-subtle)', alignSelf: 'start' }}>
                        <FadeIn delay={0.2}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Technologies</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                                <li style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>Next.js / React</li>
                                <li style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>TypeScript</li>
                                <li style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>PostgreSQL</li>
                                <li>AWS / Vercel</li>
                            </ul>
                            <Link href="/contact" className="primaryButton" style={{ width: '100%', textAlign: 'center' }}>
                                Request Web Project
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </>
    );
}
