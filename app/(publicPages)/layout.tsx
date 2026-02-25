import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

export const metadata = {
  title: "K³ | Coders' Club Kottayam",
  description: "K³ is the official coding contest of Coders' Club Kottayam.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      <Footer />
    </>
  );
}
