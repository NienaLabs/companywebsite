import Link from 'next/link';
import styles from './page.module.css';
import FadeIn from '@/components/FadeIn';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Products | Niena Labs',
    description: 'Applied engineering tools built by us.',
};

export default function ProductsPage() {
    return (
        <div className="container">
            <section className={styles.productHeader}>
                <FadeIn>
                    <h1 className={styles.title}>Our Applied Engineering.</h1>
                    <p className={styles.intro}>
                        We don&apos;t just talk, we build. These are the tools we&apos;ve engineered to solve real problems.
                    </p>
                </FadeIn>
            </section>

            <section className="section">
                <div className={styles.productList}>
                    {/* Niena */}
                    <FadeIn delay={0.1}>
                        <div className={styles.productCard}>
                            <div className={styles.productImage}>
                                <span style={{ zIndex: 2, fontWeight: 700, letterSpacing: '0.1em', fontSize: '2rem' }}>NIENA</span>
                            </div>
                            <div className={styles.productContent}>
                                <h2 className={styles.productTitle}>Niena</h2>
                                <p className={styles.productDesc}>
                                    The intelligent engineering dashboard. unifying metrics from GitHub and Linear into a single pulse.
                                </p>
                                <Link href="/products/niena" className={styles.productLink}>
                                    View Product Details
                                </Link>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Internal Tooling */}
                    <FadeIn delay={0.2}>
                        <div className={styles.productCard} style={{ opacity: 0.8 }}>
                            <div className={styles.productImage} style={{ background: 'linear-gradient(45deg, #050507 0%, #151515 100%)' }}>
                                <span style={{ zIndex: 2, fontWeight: 600, letterSpacing: '0.05em', color: 'var(--text-tertiary)' }}>INTERNAL</span>
                            </div>
                            <div className={styles.productContent}>
                                <h2 className={styles.productTitle} style={{ fontSize: '2rem' }}>Internal Suite</h2>
                                <p className={styles.productDesc}>
                                    More tools coming soon. We dogfood everything we build before releasing it to the world.
                                </p>
                                <div className={styles.productLink} style={{ background: 'transparent', color: 'var(--text-tertiary)', padding: 0, boxShadow: 'none' }}>
                                    Coming Soon
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
