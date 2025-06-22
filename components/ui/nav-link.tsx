'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const path = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={path.endsWith(href) ? "text-blue-600" : ""}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
