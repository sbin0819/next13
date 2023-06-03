import React from 'react';
import Post from './Post';
import { getPosts } from '@/utils/mdxUtils';
import type { PostData } from '@/utils/mdxUtils';

async function getData(): Promise<PostData[] | []> {
  try {
    const res = await getPosts();
    return res as PostData[];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Page(): Promise<JSX.Element> {
  const data = await getData();
  return <Post data={data} />;
}
