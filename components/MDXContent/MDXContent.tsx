'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import Image from 'next/image';
// import { Heading, InlineCode, Pre, Table, Text } from 'my-components'

const ResponsiveImage = (props: any) => (
  <Image
    alt={props.alt}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }}
    {...props}
  />
);

const components = {
  h1: (props: any) => <h1 {...props} className="text-2xl font-bold" />,
  h2: (props: any) => <h2 className="text-xl font-bold" />,
  p: (props: any) => (
    <p className="text-gray-500 dark:text-gray-400" {...props} />
  ),
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <code {...props} />,
  img: ResponsiveImage,
};

interface MDXContentProps {
  source: MDXRemoteProps;
}

export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={components} />;
}
