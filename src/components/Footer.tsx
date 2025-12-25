import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '12px' }}>
                            <Image src="/company_logo.png" alt="Niena Labs Logo" width={280} height={50} style={{ objectFit: 'contain' }} />
                        </div>
                        <p className={styles.tagline}>
                            Engineering complex systems for the future.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>Company</h4>
                            <Link href="/about">About</Link>
                            <Link href="/careers">Careers</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                        <div className={styles.column}>
                            <h4>Work</h4>
                            <Link href="/services">Services</Link>
                            <Link href="/products">Products</Link>
                            {/* <Link href="/open-source">Open Source</Link> */}
                        </div>
                        <div className={styles.column}>
                            <h4>Legal</h4>
                            <Link href="/legal/privacy">Privacy Policy</Link>
                            <Link href="/legal/terms">Terms of Service</Link>
                            <Link href="/legal/security">Security</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Niena Labs. All rights reserved.
                    </div>
                    <div className={styles.social}>
                        {/* Social placeholders */}
                        <a href="https://www.tiktok.com/@nienalabs" aria-label="TikTok">TikTok</a>
                        <a href="https://www.instagram.com/nienalabs/" aria-label="Instagram">Instagram</a>
                        <a href="https://www.linkedin.com/company/niena-labs/" aria-label="LinkedIn">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
