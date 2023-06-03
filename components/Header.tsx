'use client';
import Link from 'next/link';
import { navigation } from '@/data/nav';
import CommandPalette from './CommandPalette';
import DropMenu from './DropMenu';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center bg-white">
      <div className="mr-4 flex items-center">
        <Link href="/">Logo</Link>
      </div>
      <nav className="flex items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/projects">Projects</Link>
        <CommandPalette navigation={navigation} />
        <DropMenu />
        {/* <ThemeSwitch /> */}
      </nav>
    </header>
  );
};

export default Header;

export const HeaderLoading = () => {
  return <header className="flex h-14 items-center bg-white"></header>;
};
