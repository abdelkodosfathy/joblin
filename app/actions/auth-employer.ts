'use server';

import { supabase } from '@/lib/supabase/client';
import { z } from 'zod';

const formSchema = z.object({
  first_name: z.string().min(2, 'First name is too short'),
  last_name: z.string().min(2, 'Last name is too short'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirm_password: z.string(),
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords don't match",
  path: ['confirm_password'],
});

export type SignupFormState = {
  success?: boolean;
  errors?: Record<string, string>;
};

export async function signupEmployer(prevState: SignupFormState, formData: FormData): Promise<SignupFormState> {
  const validated = formSchema.safeParse({
    first_name: formData.get('first_name'),
    last_name: formData.get('last_name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirm_password: formData.get('confirm_password'),
  });

  if (!validated.success) {
    const fieldErrors: Record<string, string> = {};
    validated.error.errors.forEach((error) => {
      const field = error.path[0];
      fieldErrors[field] = error.message;
    });
    return { success: false, errors: fieldErrors };
  }

  // const supabase = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  // );


  const { email, password, first_name, last_name } = validated.data;

  // Sign up the user with Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      errors: {
        email: error.message,
      },
    };
  }

  const user_id = data.user?.id;

  if (!user_id) {
    return {
      success: false,
      errors: {
        general: 'Unexpected error occurred. Try again later.',
      },
    };
  }

  // Insert into employers table
  const { error: insertError } = await supabase.from('employers').insert({
    user_id,
    first_name,
    last_name,
    email,
  });

  if (insertError) {
    return {
      success: false,
      errors: {
        general: insertError.message,
      },
    };
  }

  return { success: true };
}
