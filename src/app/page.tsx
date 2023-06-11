import { NotesList } from '@/components/NotesList';
import { TimerCounter } from '@/components/TimerCounter';
import { Suspense } from 'react';
import { Spinner } from '@/components/Spinner';
import { RefreshBtn } from '@/components/RefreshBtn';

export default async function Home() {
  const NotesListComponent = NotesList();
  return (
    <main>
      <div className='m-10 text-center'>
        <p>Hello World</p>
        <Suspense fallback={<Spinner color='border-green-500' />}>
          {NotesListComponent}
          {/* @ts-ignore */}
          {/* <NotesList /> */}
        </Suspense>
        <TimerCounter /> {/* client component */}
        <RefreshBtn />
      </div>
    </main>
  );
}
