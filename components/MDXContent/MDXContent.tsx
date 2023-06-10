'use client';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { HTMLAttributes } from 'react';
import Image from '../Image';
import Pre from './Pre';
import CustomLink from './Link';
import TOCInline from './TOCInline';

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  alt?: string;
  sizes?: string;
  style?: React.CSSProperties;
}

const ResponsiveImage = (props: ImageProps) => (
  <Image
    alt={props.alt}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }}
    {...props}
  />
);

const components = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className="text-4xl font-bold" />
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="text-2xl font-bold" />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="text-xl font-bold" />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="text-gray-500 dark:text-gray-400" />
  ),
  pre: (props: any) => <Pre {...props} />,
  a: (props: any) => <CustomLink {...props} />,
  TOCInline,
  Image,
  img: ResponsiveImage,
};

interface MDXContentProps {
  source: MDXRemoteProps;
}

export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={components} />;
}
