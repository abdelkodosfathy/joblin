'use client'
// app/(employer)/(auth)/register/page.tsx

import logo from '@/public/joblinLogo.svg';
import Image from 'next/image';
import Link from 'next/link';
import AuthForm from './auth-form';
import OrLine from '@/components/ui/or-line';
import { supabase } from "@/lib/supabase";
import LoginWithGoogle from '@/components/LoginWithGoogle/login-with-google';
import FormSteps from '@/components/ui/from-steps';

export default function SignUpPage() {

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error("Google Login Error:", error.message);
    }
  };

  
  return (
    <>
      <FormSteps />
      <div className="flex justify-center">
        <Image alt="Joblin Logo" src={logo} className="h-12 w-auto" />
      </div>

      <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">
        Give us your company information
      </h1>
      <p className="text-center text-sm text-gray-600">
        Please enter your personal details to set up your account and personalize your experience
      </p>

      <AuthForm />
      <OrLine />
      <LoginWithGoogle onClick={handleGoogleLogin}/>

      <p className="text-center text-sm text-gray-600">
        Do you already have an account?{' '}
        <Link href="/employer/login" className="text-blue-600 font-bold hover:underline">
          Login
        </Link>
      </p>
    </>
  );
}
