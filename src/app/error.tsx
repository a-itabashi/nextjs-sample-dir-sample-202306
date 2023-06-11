'use client';

export default function error({ error }: { error: Error }) {
  return (
    <div>
      <p className='mt-6 text-center text-red-500'>Data fetching is server failed</p>
    </div>
  );
}
