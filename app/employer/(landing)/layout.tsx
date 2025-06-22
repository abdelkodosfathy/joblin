import EmployerNavbar from '@/components/employer/EmployerNavbar';
import React, { ReactNode } from 'react';

interface EmployerLayoutProps {
  children: ReactNode;
}

const EmployerLayout = ({ children }: EmployerLayoutProps) => {
  return (
    <>
      <EmployerNavbar />
      <main>{children}</main>
    </>
  );
};

export default EmployerLayout;
