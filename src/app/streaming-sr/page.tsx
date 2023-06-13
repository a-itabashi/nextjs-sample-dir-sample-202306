export const revalidate = 0;

import { Suspense } from 'react';
import { BlogList } from '@/components/BlogList';
import { NewsList } from '@/components/NewsList';
import { Spinner } from '@/components/Spinner';

export default function StreamingServerRenderingPage() {
  const blogListComponent = BlogList();
  const newsListComponent = NewsList();
  return (
    <section className='flex'>
      <aside className='w-1/4'>
        <section className='fixed m-1 h-full w-1/4 border border-blue-500 bg-gray-200 p-1'>
          <Suspense fallback={<Spinner color='border-green-500' />}>
            {/* Async Server Component */}
            {blogListComponent}
          </Suspense>
        </section>
      </aside>
      <main>
        <section className='fixed w-3/4'>
          <Suspense fallback={<Spinner />}>
            {/* Async Server Component */}
            {newsListComponent}
          </Suspense>
        </section>
      </main>
    </section>
  );
}
