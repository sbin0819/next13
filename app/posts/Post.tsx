'use client';

import { useState } from 'react';

export default function Post({ data }: { data: any[] }) {
  const [keyword, setKeyword] = useState<string>('');

  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="my-10 w-full">
      <div className="w-full">
        <input
          className="mx-auto mb-10 flex h-10 w-[300px] text-black"
          onChange={onKeywordChange}
          value={keyword}
        />
        {[...data]
          ?.filter((item: any) =>
            (item?.title && item?.tag)
              .toLowerCase()
              .includes(keyword.toLowerCase()),
          )
          .map((post: any, idx) => (
            <div
              key={idx}
              className="mx-auto mb-4 flex h-20 max-w-md items-center justify-center bg-blue-400"
            >
              {post.title}
            </div>
          ))}
      </div>
    </div>
  );
}
