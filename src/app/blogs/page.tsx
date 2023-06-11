import { RouterBtn } from '@/components/RouterBtn';

// dynamic routes(静的ではない)の設定をしたい場合はpage.tsxにforce-dynamicを定義する必要あり
// export const dynamic = 'force-dynamic';

export default function BlogPage() {
  return (
    <div className='m-10 text-center'>
      <span className='text-lg'>Click a title on the left to view detail</span>
      <div className='my-5 flex justify-center'>
        <RouterBtn />
      </div>
    </div>
  );
}
