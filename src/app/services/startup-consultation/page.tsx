import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from '../page.module.css';

export default function StartupConsultationPage() {
    return (
        <>
            <div className={styles.detailHeader}>
                <div className="container">
                    <FadeIn>
                        <h1 className={styles.detailTitle}>Startup Consultation</h1>
                        <p className="text-body" style={{ fontSize: '1.25rem', maxWidth: '800px' }}>
                            This is a partnership. We act as your temporary CTO and technical co-founder.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container">
                <div className={styles.detailContent}>
                    <div>
                        <FadeIn delay={0.1}>
                            {/* Section: Process */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>1. Idea Validation</h3>
                                    <p className="text-body">Feasibility studies and technical proof-of-concepts to test the waters before diving in.</p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>2. MVP Architecture</h3>
                                    <p className="text-body">Designing the Minimum Viable Product that actually works and scales.</p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>3. Tech Stack Decisions</h3>
                                    <p className="text-body">Selecting the right tools to recruit talent and avoid early debt.</p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>4. Scaling Guidance</h3>
                                    <p className="text-body">Roadmapping from user 1 to user 1,000,000.</p>
                                </div>
                            </div>

                            {/* Section: Philosophy */}
                            <h2 className="text-title" style={{ marginBottom: '1rem' }}>Collaboration</h2>
                            <p className="text-body" style={{ marginBottom: '2rem' }}>
                                True <strong>Founder-to-Engineer</strong> collaboration. No middlemen project managers. You speak directly with the architects building your vision.
                            </p>

                        </FadeIn>
                    </div>

                    <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-subtle)', alignSelf: 'start' }}>
                        <FadeIn delay={0.2}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Start Now</h3>
                            <p className="text-small" style={{ marginBottom: '1.5rem' }}>
                                Don&apos;t build in the dark. Get expert validation.
                            </p>
                            <Link href="/contact" className="primaryButton" style={{ width: '100%', textAlign: 'center' }}>
                                Book a Strategy Session
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </>
    );
}
