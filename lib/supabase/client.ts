// lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/lib/types/supabase';

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
