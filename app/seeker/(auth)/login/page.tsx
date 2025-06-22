'use client';

import { FC, FormEvent } from 'react';
import LabledInput from '@/components/LabledInput/LabledInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/public/joblinLogo.svg';
import Image from 'next/image';
import Link from 'next/link';
import OrLine from '@/components/ui/or-line';
import LoginWithGoogle from '@/components/LoginWithGoogle/login-with-google';

const LoginPage: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
        <div className="w-full max-w-md space-y-6">
          <div className="flex justify-center">
            <Image alt="Joblin Logo" src={logo} className="h-12 w-auto" />
          </div>

          <p className="text-center text-sm text-gray-600">
            Are You Employer?{' '}
            <Link href="/seeker/login" className="text-blue-600 font-semibold hover:underline">
              Click Here
            </Link>
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <LabledInput id="email" name="email" label="Company Email" />
            <LabledInput id="password" name="password" label="Password" type="password" />

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-neutral-400">
                <Input type="checkbox" className="w-4 h-4" />
                Remember Me
              </label>
              <Link href="/employer/forgot-password" className="text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <Button className="w-full py-6 text-lg" type="submit">Login</Button>
          </form>

          <OrLine />

          <LoginWithGoogle />

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link href="/employer/sign-up" className="text-blue-600 font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
  );
};

export default LoginPage;
