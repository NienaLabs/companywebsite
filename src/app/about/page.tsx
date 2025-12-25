import styles from './page.module.css';
import { Metadata } from 'next';
import Image from 'next/image';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';

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

                {/* Founders Section */}
                <div className={styles.foundersSection}>
                    <h2 className="text-title" style={{ marginBottom: '1rem' }}>Meet the Founders</h2>
                    <p className="text-body" style={{ maxWidth: '800px', marginBottom: '2rem' }}>
                        The team behind Niena Labs brings together expertise in engineering, research, and product development.
                    </p>

                    <div className={styles.foundersGrid}>
                        {/* Founder 1 - EDIT THIS */}
                        <div className={styles.founderCard}>
                            <Image
                                src="/Yaw Adomako.png"
                                alt="Adomako Yaw"
                                width={150}
                                height={150}
                                className={styles.founderImage}
                            />
                            <h3 className={styles.founderName}>Yaw Adomako</h3>
                            <p className={styles.founderRole}>Co-Founder</p>
                            <p className={styles.founderBio}>
                                Co founder and software engineer focused on building scalable and impactful software products.

                                Experienced in full stack web and mobile development, with a strong focus on designing, building, and shipping production ready systems. Enjoys working across the entire product lifecycle, from system design and clean, maintainable code to reliable deployment, iteration, and long term maintenance.

                                Currently building a startup with a strong emphasis on turning ideas into real world software solutions, solving meaningful problems, and creating long term value through thoughtful engineering and execution. Passionate about quality, scalability, and building products that people can trust.
                            </p>
                            <div className={styles.socialLinks}>
                                <a
                                    href="https://www.linkedin.com/in/yaw-adomako-323963322/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="https://www.instagram.com/evan_dc1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="Instagram"
                                >
                                    <Instagram size={24} />
                                </a>
                                <a
                                    href="https://github.com/yawadomako123"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="GitHub"
                                >
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Founder 2 - EDIT THIS */}
                        <div className={styles.founderCard}>
                            <Image
                                src="/Williams Adusei.png"
                                alt="Williams Adusei"
                                width={150}
                                height={150}
                                className={styles.founderImage}
                            />
                            <h3 className={styles.founderName}>Williams Adusei</h3>
                            <p className={styles.founderRole}>Co-Founder</p>
                            <p className={styles.founderBio}>
                                Co-founder, well-versed in modern technologies and software engineering best practices, focused on building impactful software products that create real change.

                                I believe being a software engineer isn’t about sticking to specific languages or frameworks they are tools. Great engineers are defined by their ability to read documentation, adapt quickly, and use the right tools to solve problems effectively.

                                I work across web, mobile, and desktop application development, with a strong interest in low-level programming and system design, and I enjoy contributing to open-source projects. I value clean, scalable code and emphasize testing, automation, and CI/CD pipelines to deliver reliable software. Passionate about solving overlooked problems and leading teams from idea to production.
                            </p>
                            <div className={styles.socialLinks}>
                                <a
                                    href="https://www.linkedin.com/in/williams-adusei-a1053a366/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="https://www.instagram.com/w_illi_am__s"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="Instagram"
                                >
                                    <Instagram size={24} />
                                </a>
                                <a
                                    href="https://github.com/Williamboy868"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="GitHub"
                                >
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
