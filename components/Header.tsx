'use client';
import { useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="h-14 bg-white">
      <nav>
        <Link href="/">Logo</Link>
        <ul className="flex">
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        {/* <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className="search">
          <i className="fas fa-search"></i>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
