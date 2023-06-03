export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mx-auto mt-[80px] max-w-[1000px]">{children}</main>;
}
