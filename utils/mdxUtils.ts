import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { serialize } from 'next-mdx-remote/serialize';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'data/_posts');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))
  .map((path) => path.replace(/\.mdx?$/, ''));

type Post = {
  content: any;
  metadata: { [key: string]: string };
};
export const getPost = async (slug: string) => {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { content, frontmatter } = await compileMDX({
    source: fileContents,
    options: { parseFrontmatter: true },
  });

  const source = await serialize(fileContents, { parseFrontmatter: true });

  return { content, metadata: frontmatter, fileContents, source };
};
