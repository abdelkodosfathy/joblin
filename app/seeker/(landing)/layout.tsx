import Navbar from '@/components/seeker/Navbar';
import React, { ReactNode } from 'react';

interface EmployerLayoutProps {
  children: ReactNode;
}

const EmployerLayout = ({ children }: EmployerLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default EmployerLayout;
