import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from '../page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Niena | AI Career & Job Hunt Assistant',
    description: 'Achieve your career goals with AI-powered resume optimization, interview prep, and job matching.',
};

export default function NienaProductPage() {
    return (
        <div className="container">
            {/* Hero Section */}
            <section className={styles.detailHeader} style={{ textAlign: 'left', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <FadeIn>
                    <span style={{ fontSize: '1rem', color: 'var(--brand-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                        Career Intelligence
                    </span>
                    <h1 className={styles.title} style={{ maxWidth: '900px', fontSize: 'clamp(2.5rem, 5vw, 6rem)', lineHeight: 1 }}>
                        Niena.
                    </h1>
                    <p className={styles.intro} style={{ margin: '0', maxWidth: '700px', fontSize: '1.75rem', lineHeight: 1.4 }}>
                        The unfair advantage for achieving your career goals.
                    </p>
                </FadeIn>
            </section>

            {/* 1. Problem it Solves */}
            <section className="section">
                <FadeIn>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 className="text-title" style={{ marginBottom: '1.5rem' }}>The Problem</h2>
                        <p className="text-body" style={{ fontSize: '1.25rem' }}>
                            Job hunting is broken. You spend hours tailoring resumes, writing cover letters into the void, and guessing what interviewers want to hear. It’s a full-time job with zero feedback loop.
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* 2. Why Existing Solutions Fail */}
            <section className="section">
                <FadeIn delay={0.1}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <div style={{ padding: '2rem', border: '1px solid var(--border-subtle)', borderRadius: '8px', background: 'rgba(255,255,255,0.01)' }}>
                            <h3 className="text-title" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Generic Boards</h3>
                            <p className="text-body">
                                LinkedIn and Indeed are flooded. You are one of 1,000 applicants. Applying is easy, standing out is impossible.
                            </p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid var(--border-subtle)', borderRadius: '8px', background: 'rgba(255,255,255,0.01)' }}>
                            <h3 className="text-title" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Manual Prep</h3>
                            <p className="text-body">
                                Mock interviews with friends are awkward and unstructured. You don&apos;t get objective data on your tone, pace, or content.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* 3. How Ours is Different */}
            <section className="section">
                <FadeIn delay={0.2}>
                    <h2 className="text-title" style={{ marginBottom: '2rem' }}>How Niena is Different</h2>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
                        <li style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{ minWidth: '30px', height: '30px', borderRadius: '50%', background: 'var(--brand-gradient)', marginTop: '0.25rem' }}></div>
                            <div>
                                <h4 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Personalized AI Agent</h4>
                                <p className="text-body">Niena&apos;s interview AI doesn&apos;t just check grammar. It understands your career history and speaks to your specific strengths.</p>
                            </div>
                        </li>
                        <li style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{ minWidth: '30px', height: '30px', borderRadius: '50%', background: 'var(--brand-gradient)', marginTop: '0.25rem' }}></div>
                            <div>
                                <h4 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Real-time Simulation</h4>
                                <p className="text-body">Voice-to-voice interviews that feel real. Get interrupted, asked follow-ups, and receive instant scoring.</p>
                            </div>
                        </li>
                    </ul>
                </FadeIn>
            </section>

            {/* 4. Tech Depth */}
            <section className="section">
                <FadeIn delay={0.3}>
                    <div style={{ padding: '2.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                        <h2 className="text-title" style={{ marginBottom: '1.5rem' }}>Technical Depth</h2>
                        <p className="text-body" style={{ marginBottom: '2rem', maxWidth: '700px' }}>
                            We use RAG (Retrieval-Augmented Generation) pipelines to ground our AI in your actual data, ensuring zero hallucinations about your work history.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {['RAG Pipeline', 'OpenAI GPT-4o', 'Vector Embeddings', 'Next.js 16', 'Edge Runtime','TRPC','Tavus'].map(tag => (
                                <span key={tag} style={{
                                    padding: '0.4rem 0.8rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--border-subtle)',
                                    borderRadius: '4px',
                                    fontSize: '0.9rem',
                                    color: 'var(--text-secondary)'
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* 5. Screenshots / Demos */}
            <section className="section">
                <FadeIn delay={0.4}>
                    <h2 className="text-title" style={{ marginBottom: '2rem' }}>Interface</h2>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{
                            width: '100%',
                            position: 'relative',
                            paddingBottom: '56.25%', // 16:9 Aspect Ratio
                            height: 0,
                            overflow: 'hidden',
                            borderRadius: '12px',
                            border: '1px solid var(--border-subtle)',
                            background: 'var(--bg-secondary)'
                        }}>
                            <iframe
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    border: 0
                                }}
                                src="https://www.youtube.com/embed/VIDEO_ID" // Replace VIDEO_ID with actual ID
                                title="Niena Product Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </FadeIn>
            </section>


            {/* 7. CTA (Use / Contribute) */}
            <section className="section" style={{ textAlign: 'center', padding: '6rem 0', borderTop: '1px solid var(--border-subtle)' }}>
                <FadeIn>
                    <h2 className="text-title" style={{ marginBottom: '2rem', fontSize: '3rem' }}>Stop Applying. Start Interviewing.</h2>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="https://app.nienalabs.com" className={styles.productLink} style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>
                            Start For Free
                        </Link>
                        <Link href="/open-source" style={{
                            border: '1px solid var(--border-strong)',
                            padding: '1rem 3rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            borderRadius: '4px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            transition: 'all 0.2s ease'
                        }} className="secondaryButton">
                            Contribute Code
                        </Link>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}
