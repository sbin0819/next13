/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const CustomLink = ({ href, ...rest }: CustomLinkProps) => {
  return (
    <Link
      className="special-underline-new no-underline hover:text-gray-100 dark:hover:text-gray-100"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  );
};

export default CustomLink;
