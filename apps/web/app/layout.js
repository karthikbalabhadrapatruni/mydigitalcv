import { Fraunces, Space_Grotesk } from 'next/font/google';
import './globals.css';

const bodyFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
});

const displayFont = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

export const metadata = {
  title: 'Karthik Balabhadrapatruni | Full-Stack Developer',
  description:
    'Full-stack portfolio for Mohana Koundinya Karthik Balabhadrapatruni, featuring React, Next.js, Angular, Node.js, Python, cloud, accessibility, and practical AI work.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
