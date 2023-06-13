import { Suspense } from 'react';
import { TodoList } from '@/components/TodoList';
import { Spinner } from '@/components/Spinner';
import { TodoEdit } from '@/components/TodoEdit';

export default async function TodoLayout({ children }: { children: React.ReactNode }) {
  const todoListComponent = TodoList();
  return (
    <section className='flex'>
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200`}>
        <TodoEdit />
        <Suspense fallback={<Spinner />}>{todoListComponent}</Suspense>
      </aside>
      <main className='flex flex-1 justify-center'>{children}</main>
    </section>
  );
}
