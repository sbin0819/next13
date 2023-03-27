// export const dynamicParams = false;
export async function generateStaticParams() {
  const posts = [{ slug: 1 }, { slug: 2 }, { slug: 3 }];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  const { slug } = params;

  return <div className="text-white">{slug}</div>;
}
