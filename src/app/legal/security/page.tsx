import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Security | Niena Labs',
};

export default function SecurityPage() {
    return (
        <article className="prose">
            <h1 className="text-title" style={{ marginBottom: '2rem' }}>Security Practices</h1>
            <p className="text-body">
                Security is at the core of our engineering philosophy.
            </p>
            <h2 style={{ fontSize: '1.5rem', margin: '2rem 0 1rem' }}>Reporting Vulnerabilities</h2>
            <p className="text-body">
                If you discover a security vulnerability in any of our projects, please report it to security@nienalabs.com.
                We pledge to investigate all reports and resolve confirmed issues promptly.
            </p>
        </article>
    );
}
