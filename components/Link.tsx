'use client';
import Link from 'next/link';

export default function CustomLink({
  children,
  href,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
