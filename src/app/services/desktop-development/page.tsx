import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from '../page.module.css';

export default function DesktopDevelopmentPage() {
    return (
        <>
            <div className={styles.detailHeader}>
                <div className="container">
                    <FadeIn>
                        <h1 className={styles.detailTitle}>Desktop Application Development</h1>
                        <p className="text-body" style={{ fontSize: '1.25rem', maxWidth: '800px' }}>
                            This instantly differentiates us. We build powerful software that breaks out of the browser.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container">
                <div className={styles.detailContent}>
                    <div>
                        <FadeIn delay={0.1}>
                            {/* Section: Platforms */}
                            <h2 className="text-title" style={{ marginBottom: '1rem' }}>Operating Systems</h2>
                            <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                                <span>Windows</span>
                                <span style={{ color: 'var(--border-strong)' }}>/</span>
                                <span>macOS</span>
                                <span style={{ color: 'var(--border-strong)' }}>/</span>
                                <span>Linux</span>
                            </div>

                            {/* Section: Approach */}
                            <h2 className="text-title" style={{ marginBottom: '1rem' }}>Approach</h2>
                            <div style={{ marginBottom: '3rem' }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Native + Cross-platform</h3>
                                    <p className="text-body">
                                        We utilize technologies like Rust (Tauri) for extreme performance or Electron for rapid UI development, ensuring the right balance for your needs.
                                    </p>
                                </div>
                            </div>

                            {/* Section: Use Cases */}
                            <h2 className="text-title" style={{ marginBottom: '1rem' }}>Use Cases</h2>
                            <ul className={styles.serviceDesc} style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '3rem' }}>
                                <li><strong>System Utilities:</strong> Tools that manage hardware or OS functions.</li>
                                <li><strong>Enterprise Tools:</strong> Offline-capable heavy-duty workstations.</li>
                                <li><strong>Creative Software:</strong> High-performance media manipulation.</li>
                            </ul>

                        </FadeIn>
                    </div>

                    <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-subtle)', alignSelf: 'start' }}>
                        <FadeIn delay={0.2}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Differentiator</h3>
                            <p className="text-small" style={{ marginBottom: '1.5rem' }}>
                                Most agencies stop at the web. We go deeper.
                            </p>
                            <Link href="/contact" className="primaryButton" style={{ width: '100%', textAlign: 'center' }}>
                                Build Desktop App
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </>
    );
}
