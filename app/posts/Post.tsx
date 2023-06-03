'use client';

import { useCallback, useMemo, useState } from 'react';
import Link from '@/components/Link';
import type { PostData } from '@/utils/mdxUtils';

export default function Post({ data }: { data: PostData[] }) {
  // State for the keyword
  const [keyword, setKeyword] = useState<string>('');

  // Handler for keyword change
  const onKeywordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setKeyword(e.target.value);
    },
    [],
  );

  const onTagButtonClick = useCallback((tag: string) => {
    setKeyword(tag);
  }, []);

  const uniqueTags = Array.from(new Set(data.flatMap((post) => post.tag)));

  const getTagCount = (tag: string) => {
    return data.filter((post) => post.tag === tag).length;
  };

  // Filter posts by keyword
  const filteredPosts = useMemo(() => {
    return data
      ?.filter(
        (item) =>
          item?.title?.toLowerCase().includes(keyword.toLowerCase()) ||
          item?.tag?.toLowerCase().includes(keyword.toLowerCase()),
      )
      .map((post, idx) => (
        <div
          key={idx}
          className="mx-auto my-4 w-full overflow-hidden rounded-lg transition duration-300 hover:bg-gray-800 hover:shadow-lg"
        >
          <Link
            className="block h-full w-full p-4"
            href={`/posts/${post?.slug}`}
          >
            <h2 className="text-lg font-medium text-white">{post.title}</h2>
            <p className="text-md text-gray-400">{post.tag}</p>
            <p className="text-md text-gray-400">{post?.desc}</p>
          </Link>
        </div>
      ));
  }, [data, keyword]);

  return (
    <div className="py-8">
      <h1 className="text-4xl">All Posts</h1>
      <div className="relative mt-8 mb-12 max-w-[500px]">
        <input
          type="text"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-6 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search Posts"
          value={keyword}
          onChange={onKeywordChange}
        />
        <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="mt-4">
        {uniqueTags.map((tag, idx) => (
          <button
            key={idx}
            className="mx-1 rounded-lg bg-gray-200 px-4 py-2 text-sm text-gray-800 hover:bg-gray-300"
            onClick={() => onTagButtonClick(tag)}
          >
            {tag} ({getTagCount(tag)})
          </button>
        ))}
      </div>

      {/* Display filtered posts */}
      <div className="flex w-full flex-col items-center justify-between">
        {filteredPosts}
      </div>
    </div>
  );
}
