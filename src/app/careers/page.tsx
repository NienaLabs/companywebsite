import Link from 'next/link';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers | Niena Labs',
    description: 'Join a team of serious engineers.',
};

export default function CareersPage() {
    return (
        <div className="container">
            <section className={styles.careersHeader}>
                <h1 className="text-hero" style={{ marginBottom: '1rem' }}>For Serious Engineers.</h1>
                <p className={styles.intro}>
                    We don&apos;t care about ping pong tables or free snacks. We care about difficult problems, clean code, and deep work.
                </p>
            </section>

            <section className="section">
                <h2 className="text-title">Culture & Standards</h2>
                <div className={styles.cultureSection}>
                    <div className={styles.cultureCard}>
                        <h3 className={styles.cultureTitle}>Deep Work</h3>
                        <p className="text-body">
                            We minimize meetings. We respect flow state. We measure output by quality, not hours.
                        </p>
                    </div>
                    <div className={styles.cultureCard}>
                        <h3 className={styles.cultureTitle}>Autonomy</h3>
                        <p className="text-body">
                            We hire people who can manage themselves. You own your projects from design to deployment.
                        </p>
                    </div>
                    <div className={styles.cultureCard}>
                        <h3 className={styles.cultureTitle}>Learning</h3>
                        <p className="text-body">
                            We allocate time for research and learning. If you aren&apos;t growing, we aren&apos;t succeeding.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2 className="text-title">Open Roles</h2>
                <div className={styles.jobList}>
                    <div className={styles.jobItem}>
                        <div>
                            <h3 className={styles.jobTitle}>Senior Rust Engineer</h3>
                            <span className={styles.jobMeta}>Remote / Systems Team</span>
                        </div>
                        <Link href="/contact" className={styles.applyButton}>Apply</Link>
                    </div>

                    <div className={styles.jobItem}>
                        <div>
                            <h3 className={styles.jobTitle}>Full-Stack Engineer</h3>
                            <span className={styles.jobMeta}>Remote / Product Team</span>
                        </div>
                        <Link href="/contact" className={styles.applyButton}>Apply</Link>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--text-primary)' }}>
                    <h3 className="text-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Internships</h3>
                    <p className="text-body">
                        We offer rigorous internships for students who want to be challenged. This is not a fetch-coffee role; you will ship production code.
                    </p>
                    <Link href="/contact" className="hover-underline" style={{ marginTop: '1rem', display: 'inline-block' }}>Inquire about internships &rarr;</Link>
                </div>
            </section>
        </div>
    );
}
