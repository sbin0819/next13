export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mx-auto max-w-[1000px]">{children}</main>;
}
