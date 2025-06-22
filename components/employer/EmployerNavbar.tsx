import Link from 'next/link';
import Image from 'next/image';
import { Bell, Search } from 'lucide-react';
import logo from '@/public/Logo.svg'
import { Button } from '../ui/button';
import NavLink from '../ui/nav-link';

const EmployerNavbar = () => {
  return (
    <header className="absolute left-1/2 transform -translate-x-1/2 top-4  w-[calc(100%-20px)] max-w-7xl border border-neutral-300 rounded-md bg-white px-4 py-3">
      <nav className="flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={122} height={40}/>
        </div>

        {/* Center: Links */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          <NavLink href='/employer'>Home</NavLink>
          <NavLink href='/employer/post-a-job'>Post a Job</NavLink>
          <NavLink href='/employer/search-cv'>Search Cv</NavLink>
          <NavLink href='/employer/products'>Products</NavLink>
          <NavLink href='/employer/pricing'>Pricing</NavLink>
        </ul>

        {/* Right: Icons & Auth */}
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-black">
            <Search size={20} />
          </button>
          <button className="text-gray-600 hover:text-black">
            <Bell size={20} />
          </button>

          {/* <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option value="employer">Employer</option>
            <option value="job-seeker">Job Seeker</option>
          </select> */}
          {/* <Role/>| */}
          <Link href={'/seeker'}>jop seeker |</Link>
          <Link href="/employer/register">
            <Button className="">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default EmployerNavbar;
