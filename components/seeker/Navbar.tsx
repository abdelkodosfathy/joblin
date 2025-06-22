import Link from 'next/link';
import Image from 'next/image';
import { Bell, Search } from 'lucide-react';
import logo from '@/public/Logo.svg'
import { Button } from '../ui/button';
import NavLink from '../ui/nav-link';

const Navbar = () => {
  return (
    <header className="absolute left-1/2 transform -translate-x-1/2 top-4 max-w-7xl w-full border border-neutral-300 rounded-md bg-white px-4 py-3">
      <nav className="flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={122} height={40}/>
        </div>

        {/* Center: Links */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          <NavLink href='/seeker'>Home</NavLink>
          <NavLink href='/seeker/find-job'>find job</NavLink>
          <NavLink href='/seeker/company'>Company</NavLink>
          <NavLink href='/seeker/create-cv'>Create Cv</NavLink>
        </ul>

        {/* Right: Icons & Auth */}
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-black">
            <Search size={20} />
          </button>
          <button className="text-gray-600 hover:text-black">
            <Bell size={20} />
          </button>

          <Link href={'/employer'}>employer |</Link>
          <Link href="/seeker/sign-up">
            <Button className="">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
