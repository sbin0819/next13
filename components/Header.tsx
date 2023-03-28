'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { navigation } from '@/data/nav';
import dynamic from 'next/dynamic';
import CommandPalette from './CommandPalette';
import DropMenu from './DropMenu';

const Header = () => {
  return (
    <header>
      <nav className="flex h-14 items-center gap-2 bg-white">
        <Link href="/">Logo</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <CommandPalette navigation={navigation} />
        <DropMenu />
      </nav>
    </header>
  );
};

export default Header;
