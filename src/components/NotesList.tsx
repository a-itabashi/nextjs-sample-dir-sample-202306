import type { Database } from '@/types/database.types';
import { format } from 'date-fns';

type Note = Database['public']['Tables']['notes']['Row'];

async function fetchNotes() {
  // 実証用にfetchを遅延させる
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${process.env.url}/rest/v1/notes?select=*`, {
    headers: new Headers({
      apiKey: process.env.apikey as string,
    }),
    // ダイナミックレンダリングへの切り替え
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data in server');
  }
  const notes: Note[] = await res.json();
  return notes;
}

export const NotesList = async () => {
  // Server Componentではcomponentレベルでasync awaitが使用できる
  const notes = await fetchNotes();

  return (
    <div>
      <p className='my-4 pb-3 text-xl font-medium underline underline-offset-4'>Notes</p>

      <ul className='m-3'>
        {notes.map((note) => (
          <li key={note.id}>
            <p>{note.title}</p>
            <p>
              <strong className='mr-3'>Created at:</strong>
              {note.created_at && format(new Date(note.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
