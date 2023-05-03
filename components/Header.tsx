'use client';
import Link from 'next/link';
import { navigation } from '@/data/nav';
import CommandPalette from './CommandPalette';
import DropMenu from './DropMenu';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  return (
    <header className="flex h-14 items-center bg-white">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <nav className="flex items-center gap-2">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/guestbook">Guestbook</Link>
        <CommandPalette navigation={navigation} />
        {/* <ThemeSwitch /> */}
        <DropMenu />
      </nav>
    </header>
  );
};

export default Header;
