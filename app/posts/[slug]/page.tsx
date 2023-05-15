import { getSlugs, getPost } from '@/lib/posts';

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getSlugs();

  return slugs.map((slug) => ({ slug }));
}

export default async function Post({ params }: { params: any }) {
  const { Content, metadata } = await getPost(params.slug + '.mdx'); // ← here

  return (
    <main>
      {metadata.title && <h1>{metadata.title}</h1>}
      <Content />
    </main>
  );
}
