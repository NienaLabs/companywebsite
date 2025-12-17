import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from '../page.module.css';

export default function MobileDevelopmentPage() {
    return (
        <>
            <div className={styles.detailHeader}>
                <div className="container">
                    <FadeIn>
                        <h1 className={styles.detailTitle}>Mobile App Development</h1>
                        <p className="text-body" style={{ fontSize: '1.25rem', maxWidth: '800px' }}>
                            Seamless experiences across all devices. iOS, Android, and everything in between.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container">
                <div className={styles.detailContent}>
                    <div>
                        <FadeIn delay={0.1}>
                            {/* Section: Platforms */}
                            <h2 className="text-title" style={{ marginBottom: '1rem' }}>Platforms</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                                <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '4px', textAlign: 'center' }}>
                                    <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>iOS</strong>
                                    <span className="text-small">Swift & Native</span>
                                </div>
                                <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '4px', textAlign: 'center' }}>
                                    <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Android</strong>
                                    <span className="text-small">Kotlin & Jetpack</span>
                                </div>
                                <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '4px', textAlign: 'center' }}>
                                    <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Cross-Platform</strong>
                                    <span className="text-small">React Native / Flutter</span>
                                </div>
                            </div>

                            {/* Section: Key Features */}
                            <h2 className="text-title" style={{ marginBottom: '1rem' }}>Core Focus</h2>
                            <ul className={styles.serviceDesc} style={{ listStyle: 'none', padding: 0, marginBottom: '3rem' }}>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.25rem' }}>Performance</strong>
                                    60fps rendering and smooth animations are standard, not a bonus.
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.25rem' }}>Offline-First</strong>
                                    Robust local data storage and synchronization logic for spotting connectivity.
                                </li>
                                <li>
                                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.25rem' }}>Real-Time</strong>
                                    Live updates and websocket integrations for collaborative apps.
                                </li>
                            </ul>

                        </FadeIn>
                    </div>

                    <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-subtle)', alignSelf: 'start' }}>
                        <FadeIn delay={0.2}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Ready to Build?</h3>
                            <p className="text-small" style={{ marginBottom: '1.5rem' }}>
                                Let&apos;s put your product in the user&apos;s hand.
                            </p>
                            <Link href="/contact" className="primaryButton" style={{ width: '100%', textAlign: 'center' }}>
                                Start Mobile Project
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </>
    );
}
