'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsOpen(false);
        }
    }, [pathname, isOpen]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <header className={`${styles.header} ${isOpen ? styles.open : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <div style={{ position: 'relative'}}>
                        <Image src="/company_logo.png" alt="Niena Labs Logo" width={280} height={40} style={{ objectFit: 'contain' }} />
                    </div>
                    
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburger}></span>
                </button>

                {/* Navigation */}
                <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
                    <Link href="/services" className={styles.link}>Services</Link>
                    <Link href="/products" className={styles.link}>Products</Link>
                    <Link href="/open-source" className={styles.link}>Open Source</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/careers" className={styles.link}>Careers</Link>
                    <Link href="/contact" className={styles.cta}>Work With Us</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
