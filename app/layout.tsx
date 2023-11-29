import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mimes.ai - Make Your Films',
  description: 'Create 3D Characters and Scenes by Typing',
};

interface RootLayoutProps {
  children: React.ReactNode; 
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </>
  );
}
