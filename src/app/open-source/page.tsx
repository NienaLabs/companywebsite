import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Open Source | Niena Labs',
    description: 'We give back because engineering should move forward. Featured repositories and tools.',
};

export default function OpenSourcePage() {
    return (
        <div className="container">
            {/* Header */}
            <section className={styles.header}>
                <FadeIn>
                    <h1 className={styles.title}>Engineering Credibility.</h1>
                    <p className={styles.subtitle}>
                        We give back because engineering should move forward.
                        Our code powers more than just our own products.
                    </p>
                </FadeIn>
            </section>

            {/* Why we build */}
            <section className="section">
                <FadeIn delay={0.1}>
                    <h2 className={styles.sectionTitle}>Why Open Source?</h2>
                    <p className={styles.textBlock}>
                        Proprietary silos stagnate innovation. By opening our core utilities, libraries, and experimental tools,
                        we force ourselves to write better, more documented, and more modular code.
                        It isn&apos;t charity; it&apos;s a commitment to quality.
                    </p>
                </FadeIn>
            </section>

            {/* Featured Repositories */}
            <section className="section">
                <FadeIn delay={0.2}>
                    <h2 className={styles.sectionTitle}>Featured Repositories</h2>
                    <div className={styles.repoGrid}>
                        {/* Repo 1 */}
                        <div className={styles.repoCard}>
                            <div className={styles.repoName}>
                                niena-ui
                                <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', border: '1px solid var(--border-subtle)', borderRadius: '12px' }}>TypeScript</span>
                            </div>
                            <p className={styles.repoDesc}>
                                A headless, accessible component primitive library for modern engineered dashboards.
                                Focused on keyboard navigation and performance.
                            </p>
                            <div className={styles.repoMeta}>
                                <span>★ 1.2k Stars</span>
                                <span>⑂ 140 Forks</span>
                            </div>
                            <Link href="#" className={styles.repoLink}>View on GitHub &rarr;</Link>
                        </div>

                        {/* Repo 2 */}
                        <div className={styles.repoCard}>
                            <div className={styles.repoName}>
                                cargo-dist-action
                                <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', border: '1px solid var(--border-subtle)', borderRadius: '12px' }}>Rust</span>
                            </div>
                            <p className={styles.repoDesc}>
                                A GitHub Action to auto-configure cross-compilation for Rust CLIs.
                                Cuts CI configuration time by 90%.
                            </p>
                            <div className={styles.repoMeta}>
                                <span>★ 850 Stars</span>
                                <span>⑂ 45 Forks</span>
                            </div>
                            <Link href="#" className={styles.repoLink}>View on GitHub &rarr;</Link>
                        </div>

                        {/* Repo 3 */}
                        <div className={styles.repoCard}>
                            <div className={styles.repoName}>
                                fast-logger
                                <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', border: '1px solid var(--border-subtle)', borderRadius: '12px' }}>Go</span>
                            </div>
                            <p className={styles.repoDesc}>
                                Zero-allocation structured logging library for high-throughput Go services.
                                Benchmarked 2x faster than Zap.
                            </p>
                            <div className={styles.repoMeta}>
                                <span>★ 2.1k Stars</span>
                                <span>⑂ 300 Forks</span>
                            </div>
                            <Link href="#" className={styles.repoLink}>View on GitHub &rarr;</Link>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Tools & Libraries */}
            <section className="section">
                <FadeIn delay={0.3}>
                    <h2 className={styles.sectionTitle}>Tools & Libraries</h2>
                    <div className={styles.toolsList}>
                        <div className={styles.toolItem}>
                            <h3 className={styles.toolName}>eslint-config-niena</h3>
                            <p className={styles.toolDesc}>Strict, opinionated linting rules for serious TS projects.</p>
                        </div>
                        <div className={styles.toolItem}>
                            <h3 className={styles.toolName}>hooks-entangled</h3>
                            <p className={styles.toolDesc}>React hooks for complex state synchronization.</p>
                        </div>
                        <div className={styles.toolItem}>
                            <h3 className={styles.toolName}>postgres-types-gen</h3>
                            <p className={styles.toolDesc}>CLI to generate TS interfaces from raw SQL queries.</p>
                        </div>
                        <div className={styles.toolItem}>
                            <h3 className={styles.toolName}>vim-setup</h3>
                            <p className={styles.toolDesc}>Our team&apos;s developer environment dotfiles.</p>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Community Impact */}
            <section className="section">
                <FadeIn delay={0.4}>
                    <h2 className={styles.sectionTitle}>Community Impact</h2>
                    <div className={styles.impactStats}>
                        <div>
                            <span className={styles.statValue}>4.5k+</span>
                            <span className={styles.statLabel}>GitHub Stars</span>
                        </div>
                        <div>
                            <span className={styles.statValue}>500k+</span>
                            <span className={styles.statLabel}>Downloads</span>
                        </div>
                        <div>
                            <span className={styles.statValue}>50+</span>
                            <span className={styles.statLabel}>Contributors</span>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Contribution Guidelines */}
            <section className="section">
                <FadeIn delay={0.5}>
                    <div style={{ padding: '3rem', border: '1px solid var(--border-subtle)', borderRadius: '8px', background: 'rgba(255,255,255,0.01)' }}>
                        <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>Contribution Guidelines</h2>
                        <p className={styles.textBlock} style={{ marginBottom: '2rem' }}>
                            We welcome PRs. To maintain our standards, please follow this flow:
                        </p>
                        <div className={styles.contributionSteps}>
                            <div className={styles.step}>
                                <span className={styles.stepNumber}>01</span>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Open an Issue</h4>
                                    <p className="text-body">Discuss the change first. We value architectural alignment over rapid merging.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <span className={styles.stepNumber}>02</span>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Pass the Linter</h4>
                                    <p className="text-body">Our CI is strict. Ensure `yarn lint` and `cargo fmt` pass before pushing.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <span className={styles.stepNumber}>03</span>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Squash & Merge</h4>
                                    <p className="text-body">We maintain a linear history. Your PR will be squashed into a single meaningful commit.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="https://github.com/nienalabs" className="primaryButton">
                                Explore on GitHub
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}
