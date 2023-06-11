'use client';
import { useRouter } from 'next/navigation';

export const RouterBtn = ({ destination = '' }: { destination?: string }) => {
  const router = useRouter();
  return (
    <button
      className='rounded bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700'
      onClick={() => {
        router.push(`/${destination}`);
      }}
    >
      Nav to {destination ? destination : 'home'}
    </button>
  );
};
