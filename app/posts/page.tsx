import { getPosts } from '@/utils/mdxUtils';

async function getData() {
  return await getPosts();
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="mx-auto w-full">
      {data.map((post: any, idx) => (
        <div
          key={idx}
          className="my-2 flex max-w-xl items-center justify-center bg-blue-400"
        >
          {post.title}
        </div>
      ))}
    </div>
  );
}
