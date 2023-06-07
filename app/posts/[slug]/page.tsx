import { postFilePaths, getPost } from '@/utils/mdxUtils';
import MDXContent from '@/components/MDXContent';
export const dynamicParams = false;

export async function generateStaticParams() {
  const files = await postFilePaths;

  return files.map((slug) => ({ slug }));
}

export default async function Post({ params }: { params: any }) {
  const { content, source } = await getPost(params.slug);
  return <MDXContent source={source} />;
}
