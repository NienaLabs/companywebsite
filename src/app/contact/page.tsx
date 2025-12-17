import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Start a Project | Niena Labs',
    description: 'Tell us about your engineering challenge.',
};

export default function ContactPage() {
    return (
        <div className="container">
            <div className={styles.contactContainer}>
                <div className={styles.heading}>
                    <h1 className={styles.title}>Start a Conversation</h1>
                    <p className={styles.subtitle}>
                        We integrate with teams that have serious engineering problems to solve.
                    </p>
                </div>

                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Name / Company</label>
                        <input type="text" id="name" name="name" className={styles.input} placeholder="Enter your name or company" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email Address</label>
                        <input type="email" id="email" name="email" className={styles.input} placeholder="name@company.com" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="type" className={styles.label}>Project Type</label>
                        <select id="type" name="type" className={styles.select}>
                            <option value="engineering">Engineering Services</option>
                            <option value="startup">Startup Consultation (MVP/Arch)</option>
                            <option value="mobile">Mobile Development</option>
                            <option value="desktop">Desktop Application</option>
                            <option value="systems">Low-Level/Systems Engineering</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="timeline" className={styles.label}>Timeline & Budget Range</label>
                        <input type="text" id="timeline" name="timeline" className={styles.input} placeholder="e.g. 3-6 months, $50k-$100k" />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description" className={styles.label}>Problem Description</label>
                        <textarea id="description" name="description" className={styles.textarea} placeholder="Describe the core problem, technical constraints, and goals..." required></textarea>
                    </div>

                    <button type="submit" className={styles.submitButton}>Initiate Request</button>

                    <p className={styles.note}>
                        By submitting, you agree to our Privacy Policy. We treat all project details as confidential.
                    </p>
                </form>
            </div>
        </div>
    );
}
