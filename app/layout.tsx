import React, { ReactNode } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface EmployerLayoutProps {
  children: ReactNode;
}

const EmployerLayout = ({ children }: EmployerLayoutProps) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default EmployerLayout;
