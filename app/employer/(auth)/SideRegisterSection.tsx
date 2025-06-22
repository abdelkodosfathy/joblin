// components/SideRegisterSection/SideRegisterSection.tsx

import Image from "next/image";
import { ReactNode } from "react";
import sideFrame from "@/public/images/employer/login.png";

type SideRegisterSectionProps = {
  message?: string;
  imageAlt?: string;
  children?: ReactNode;
};

const SideRegisterSection = ({
  message = "We’ve sent you an email. Please check your inbox to continue.",
  imageAlt = "Skyscrapers from a bottom view",
  children,
}: SideRegisterSectionProps) => {
  return (
    <section className="hidden md:flex md:w-1/2">
      <div className="p-4 w-full max-h-screen flex items-center justify-center relative">
        <Image
          src={sideFrame}
          alt={imageAlt}
          className="max-h-full w-full object-contain"
        />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/85 backdrop-blur-lg rounded-xl px-6 py-4 shadow-lg w-11/12 max-w-md">
          {children ? (
            children
          ) : (
            <p className="text-center text-gray-800 text-sm">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SideRegisterSection;
