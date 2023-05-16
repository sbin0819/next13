import { getPosts } from '@/utils/mdxUtils';
import Post from './Post';

async function getData() {
  return await getPosts();
}

export default async function Page() {
  const data = await getData();
  return <Post data={data} />;
}
