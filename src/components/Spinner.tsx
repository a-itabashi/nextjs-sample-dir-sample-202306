export const Spinner = ({ color = 'border-blue-500' }: { color?: string }) => {
  return (
    <div className='my-6 flex justify-center'>
      <div
        className={`h-10 w-10 animate-spin rounded-full border-4 ${color} border-t-transparent`}
      />
    </div>
  );
};
