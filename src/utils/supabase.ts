// client側のインスタンスを生成
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/database.types';

export default createBrowserSupabaseClient<Database>();
