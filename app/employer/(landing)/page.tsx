'use client';

import '@/app/globals.css'
import { FC } from "react";
import { Button } from "@/components/ui/button";
import heroImage from '@/public/images/employer/hero-section.png';
import reviewChart from '@/public/Cahrts.svg';
import ratingChart from '@/public/Cahrts1.svg';
import companyChart from '@/public/Cahrts2.svg';
import Image from "next/image";

import Section from "@/components/employer/Section";
import CompaniesSection from "@/components/employer/companies-section";

const Home: FC = () => {
  return (
    <main className="h-screen bg-gray-200 px-6">
      <section className="h-full max-w-7xl mx-auto flex justify-between flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hire Smarter, Grow Faster with <span className="text-primary">JOBLIN!</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Post your job openings on JOBLIN and connect with thousands of top professionals. 
            With advanced tools, smart matching systems, and a user-friendly interface.
          </p>
          <Button>
            Post a Job
          </Button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image 
            src={heroImage} 
            alt="Hiring platform illustration"
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      <Section title='Trused by 2K companies' description='Comments from companies that have hired you'>
        <div className="flex justify-center gap-6">
          {/* Box 1 */}
          <div className="bg-white flex items-center justify-between rounded-xl shadow-md p-6 max-w-sm text-left">
            <div>
              <p className="text-gray-500 text-lg font-semibold">Review</p>
              <p className="text-2xl font-semibold text-gray-800">1M</p>
            </div>
            <Image alt="review chart" src={reviewChart} className="w-32 h-auto ml-4" />
          </div>

          {/* Box 2 */}
          <div className="bg-white flex items-center justify-between rounded-xl shadow-md p-6 max-w-sm text-left">
            <div>
              <p className="text-gray-500 text-lg font-semibold">Rating</p>
              <p className="text-2xl font-semibold text-gray-800">4.6</p>
            </div>
            <Image alt="rating chart" src={ratingChart} className="w-32 h-auto ml-4" />
          </div>

          {/* Box 3 */}
          <div className="bg-white flex items-center justify-between rounded-xl shadow-md p-6 max-w-sm text-left">
            <div>
              <p className="text-gray-500 text-lg font-semibold">Company</p>
              <p className="text-2xl font-semibold text-gray-800">2k</p>
            </div>
            <Image alt="company chart" src={companyChart} className="w-32 h-auto ml-4" />
          </div>
        </div>
      </Section>

      <CompaniesSection />

      <Section
        title="Efficient solutions for hiring success"
        description="Optimize your recruitment with powerful tools for search, performance, efficiency, and visibility"
      />
      <Section
        title="Elevate your hiring strategy"
        description="Treamline your recruitment process with innovative solutions for sourcing, job posts, career events, and flexible hiring"
      />
      <Section
        title="The result are in - Our clients win"
        description="The proof is in the partnerships, Here’s why companies choose power to fly  for building engaged and inclusive workforces."
      />
    </main>
  );
};

export default Home;
