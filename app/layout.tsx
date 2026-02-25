import { Poppins } from 'next/font/google';
import './globals.css';
import LenisScroll from '@/components/LenisScroll';
import { CornerNavbar } from '@/components/menu';
import CustomCursor from '@/components/CustomCursor';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/background-splash.svg" as="image" />
      </head>
      <body>
        <CustomCursor />
        <LenisScroll />
        <CornerNavbar />
        {children}
      </body>
    </html>
  );
}
