import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Niena Labs',
};

export default function TermsPage() {
    return (
        <article className="prose">
            <h1 className="text-title" style={{ marginBottom: '2rem' }}>Terms of Service</h1>
            <p className="text-body">
                By accessing the Niena Labs website, you agree to be bound by these terms.
            </p>
            <h2 style={{ fontSize: '1.5rem', margin: '2rem 0 1rem' }}>1. Use License</h2>
            <p className="text-body">
                Permission is granted to temporarily view the materials on Niena Labs&apos; website for personal, non-commercial transitory viewing only.
            </p>
        </article>
    );
}
