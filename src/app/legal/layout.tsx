export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container" style={{ maxWidth: '800px', padding: '4rem 1rem' }}>
            {children}
        </div>
    );
}
