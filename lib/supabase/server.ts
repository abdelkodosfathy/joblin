// lib/supabase/server.ts
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../types/supabase'  // لو عامل types مخصصة من Supabase

export const createClient = () => {
  return createServerComponentClient<Database>({ cookies });
};
