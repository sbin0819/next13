'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import CommandPalette from './CommandPalette';
import { navigation } from '@/data/nav';

const Header = () => {
  return (
    <header>
      <nav className="flex h-14 items-center gap-2 bg-white">
        <Link href="/">Logo</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <CommandPalette navigation={navigation} />
      </nav>
    </header>
  );
};

export default Header;
