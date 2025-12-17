import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Case Studies | Niena Labs',
    description: 'Proof of capability. How we solved complex engineering challenges.',
};

export default function CaseStudiesPage() {
    return (
        <div className="container">
            <section className={styles.header}>
                <FadeIn>
                    <h1 className={styles.title}>Proof of Capability.</h1>
                    <p className={styles.subtitle}>
                        We don&apos;t sell hours; we sell outcomes. Here is how we&apos;ve solved
                        complex problems for our partners.
                    </p>
                </FadeIn>
            </section>

            <section className="section">
                <div className={styles.bentoGrid}>
                    {/* Case 1 - Large Feature */}
                    <FadeIn delay={0.1} className={styles.span2}>
                        <Link href="/case-studies/fintech-migration" className={`${styles.caseCard} ${styles.span2}`} style={{ minHeight: '500px' }}>
                            <div className={styles.imagePlaceholder} style={{ background: 'linear-gradient(45deg, #1a1a2e 0%, #16213e 100%)' }}>
                                {/* Decorative Abstract */}
                                <div style={{ position: 'absolute', top: '20%', right: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(124, 92, 255, 0.1)', filter: 'blur(50px)' }}></div>
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.clientName}>Fintech Enterprise</span>
                                <h2 className={styles.caseTitle} style={{ fontSize: '2.5rem' }}>Legacy to Rust Migration</h2>
                                <p className={styles.caseExcerpt}>
                                    Migrating a $4B/year transaction pipeline from legacy Java to Rust, achieving 99.999% uptime and 40% cost reduction.
                                </p>
                            </div>
                        </Link>
                    </FadeIn>

                    {/* Case 2 - Tall */}
                    <FadeIn delay={0.2} className={styles.rowSpan2}>
                        <Link href="/case-studies/healthcare-data" className={`${styles.caseCard} ${styles.rowSpan2}`} style={{ minHeight: '500px' }}>
                            <div className={styles.imagePlaceholder} style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)' }}></div>
                            <div className={styles.cardContent}>
                                <span className={styles.clientName}>HealthTech Scaleup</span>
                                <h2 className={styles.caseTitle}>Zero-Knowledge Patient Data</h2>
                                <p className={styles.caseExcerpt}>
                                    Architecting a HIPAA-compliant data store using end-to-end encryption and secure enclaves.
                                </p>
                            </div>
                        </Link>
                    </FadeIn>

                    {/* Case 3 - Standard */}
                    <FadeIn delay={0.3}>
                        <Link href="/case-studies/logistics-engine" className={styles.caseCard}>
                            <div className={styles.imagePlaceholder} style={{ background: 'radial-gradient(circle at top right, #3a1c71 0%, #000 100%)' }}></div>
                            <div className={styles.cardContent}>
                                <span className={styles.clientName}>Logistics Global</span>
                                <h2 className={styles.caseTitle}>Real-time Route Optimization</h2>
                                <p className={styles.caseExcerpt}>
                                    Reducing fleet fuel consumption by 12% via a WASM-powered routing engine in the browser.
                                </p>
                            </div>
                        </Link>
                    </FadeIn>

                    {/* Case 4 - Standard */}
                    <FadeIn delay={0.4}>
                        <Link href="/case-studies/defi-protocol" className={styles.caseCard}>
                            <div className={styles.imagePlaceholder} style={{ background: 'conic-gradient(from 45deg, #111 0%, #222 100%)' }}></div>
                            <div className={styles.cardContent}>
                                <span className={styles.clientName}>DeFi Protocol</span>
                                <h2 className={styles.caseTitle}>Smart Contract Audit & Fix</h2>
                                <p className={styles.caseExcerpt}>
                                    Secured $150M TVL by identifying and patching a re-entrancy vulnerability before launch.
                                </p>
                            </div>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
