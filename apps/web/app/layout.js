import { Manrope, Sora } from 'next/font/google';
import './globals.css';

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

const displayFont = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Karthik Balabhadrapatruni | Full-Stack Developer',
  description:
    'Portfolio of Mohana Koundinya Karthik Balabhadrapatruni, a full-stack developer with experience in React, Next.js, Angular, Node.js, Python, AWS, Azure, accessibility, and AI POCs.',
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
