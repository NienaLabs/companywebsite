import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Niena Labs | Software Engineering & Problem Solving',
  description: 'We are a software engineering company and problem-solving company, focused on complex challenges, scalability, and deep systems.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jakarta.variable}>
        <Header />
        <main style={{ minHeight: '100vh', paddingTop: '80px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
