
import styles from '../products/page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Research & Experiments | Niena Labs',
    description: 'Our lab for experimental tools and systems.',
};

export default function ResearchPage() {
    return (
        <div className="container">
            <section className={styles.productHeader}>
                <h1 className={styles.title}>The Lab.</h1>
                <p className={styles.intro}>
                    We experiment with what&apos;s next. Not everything here is production-ready, but everything is cutting-edge.
                </p>
            </section>

            <section className="section">
                <div className={styles.productList}>
                    <div className={styles.productCard}>
                        <div className={styles.productContent}>
                            <h3 className={styles.productTitle}>AI Code Generation</h3>
                            <p className={styles.productDesc}>
                                Building custom LLM agents specialized for legacy code refactoring.
                            </p>
                            <span style={{ fontSize: '0.8rem', border: '1px solid var(--text-tertiary)', padding: '0.2rem 0.5rem', color: 'var(--text-secondary)' }}>Experimental</span>
                        </div>
                    </div>

                    <div className={styles.productCard}>
                        <div className={styles.productContent}>
                            <h3 className={styles.productTitle}>Distributed File System</h3>
                            <p className={styles.productDesc}>
                                A research prototype for a new kind of content-addressable storage optimized for video.
                            </p>
                            <span style={{ fontSize: '0.8rem', border: '1px solid var(--text-tertiary)', padding: '0.2rem 0.5rem', color: 'var(--text-secondary)' }}>Research</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
