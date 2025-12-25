import type { Metadata } from 'next';
import { Outfit, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Niena Labs | Engineering & Problem Solving',
  description: 'We are a software engineering company + problem-solving lab. focused on complex challenges, scalability, and deep systems.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${outfit.variable}`}>
        <Header />
        <main style={{ minHeight: '100vh', paddingTop: '80px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
