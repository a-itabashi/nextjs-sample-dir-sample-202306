import { BlogListStatic } from '@/components/BlogListStatic';
import { RefreshBtn } from '@/components/RefreshBtn';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const blogListStaticComponent = BlogListStatic();
  return (
    <section className='flex'>
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200 p-2`}>
        {blogListStaticComponent}
        <div className='flex justify-center'>
          <RefreshBtn />
        </div>
      </aside>
      <main className='flex flex-1 justify-center'>{children}</main>
    </section>
  );
}
