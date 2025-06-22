import React, { FC, ReactNode } from "react";

type SectionProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

const Section: FC<SectionProps> = ({ title, description, children }) => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 mb-8 max-w-[50ch] mx-auto">
        {description}
      </p>
      {children}
    </section>
  );
};

export default Section;
