import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Niena Labs',
};

export default function PrivacyPage() {
    return (
        <article className="prose">
            <h1 className="text-title" style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
            <p className="text-body" style={{ marginBottom: '1rem' }}>
                Last updated: [Date]
            </p>
            <p className="text-body" style={{ marginBottom: '1rem' }}>
                At Niena Labs, we take privacy seriously. We collect minimal data necessary to function.
            </p>
            <h2 style={{ fontSize: '1.5rem', margin: '2rem 0 1rem' }}>1. Data Collection</h2>
            <p className="text-body">
                We collect info you provide via our contact forms (Name, Email, Project Details).
                We use this solely to communicate with you regarding your project inquiry.
            </p>
            {/* Add more sections as needed */}
        </article>
    );
}
