import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Niena Labs',
    description: 'Our engineering principles, vision, and why we exist.',
};

export default function AboutPage() {
    return (
        <div className="container">
            <section className={styles.aboutSection}>
                <h1 className={styles.title}>Identity, Not Marketing.</h1>
                <p className={styles.intro}>
                    Niena Labs exists because software is often built for the short term. We build for the long haul.
                    We are a team of engineers, researchers, and problem solvers who care about depth, reliability ,correctness with one idea,change the world and make sure you don&apos;t leave it the way you found it.
                </p>

                <h2 className="text-title" style={{ marginTop: '4rem' }}>Who We Are</h2>
                <p className="text-body" style={{ maxWidth: '800px', marginTop: '1rem' }}>
                    We are not a typical agency. We don&apos;t just churn out websites. We are technical partners for companies
                    that face complex engineering challenges. From low-level systems to high-scale web applications,
                    we bring a rigorous engineering mindset to every specific problem.
                </p>

                <h2 className="text-title" style={{ marginTop: '4rem' }}>Engineering Principles</h2>
                <div className={styles.principles}>
                    <div className={styles.principleCard}>
                        <h3 className={styles.principleTitle}>Correctness First</h3>
                        <p className={styles.principleText}>
                            It doesn&apos;t matter how fast it is if it&apos;s wrong. We prioritize logical correctness and robustness over shortcuts.
                        </p>
                    </div>
                    <div className={styles.principleCard}>
                        <h3 className={styles.principleTitle}>Deep Understanding</h3>
                        <p className={styles.principleText}>
                            We don&apos;t use tools we don&apos;t understand. We dive deep into the stack to ensure we control our technology, not the other way around.
                        </p>
                    </div>
                    <div className={styles.principleCard}>
                        <h3 className={styles.principleTitle}>Simplicity</h3>
                        <p className={styles.principleText}>
                            Complexity is the enemy of reliability. We strive for the simplest effective solution, even if it takes more effort to find.
                        </p>
                    </div>
                </div>

                <div className={styles.vision}>
                    <h2 className="text-title" style={{ marginBottom: '1rem' }}>Long-Term Vision</h2>
                    <p className="text-body">
                        To become a company where the world&apos;s hardest software problems are solved.
                        We aim to bridge the gap between academic research and industrial application, creating tools and systems that define the future of software engineering and change humanity as we see it.
                    </p>
                </div>
            </section>
        </div>
    );
}
