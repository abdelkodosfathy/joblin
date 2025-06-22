// app/(employer)/(auth)/layout.tsx

import { ReactNode } from 'react';
import SideRegisterSection from './SideRegisterSection';
export default function EmployerAuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Page-specific content */}
      <section className="w-full md:w-1/2 flex flex-col justify-center items-center">
        <div className="w-full max-w-md space-y-6">
          {children}
        </div>
      </section>

      {/* Right Section - Shared illustration */}
      <SideRegisterSection />
    </main>
  );
}
