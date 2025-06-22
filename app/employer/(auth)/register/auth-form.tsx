'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";

import LabledInput from "@/components/LabledInput/LabledInput";
import { signupEmployer } from "@/app/actions/auth-employer";
import PasswordInput from "@/components/ui/password-input";

// نوع البيانات المتوقعة من formState
type SignupFormState = {
  success: boolean;
  pending?: boolean;
  error?: string;
  errors?: {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    confirm_password?: string;
  };
};

const AuthForm = () => {
  const router = useRouter();

  const [formState, formAction] = useActionState<SignupFormState>(signupEmployer, {
    success: false,
    errors: {},
    pending: false,
  });

  useEffect(() => {
    if (formState.success) {
      router.push("/employer/sign-up/profile-data");
    }
  }, [formState.success, router]);

  return (
    <form action={formAction} className="space-y-4">
      {formState.error && (
        <p className="text-red-600 text-sm text-center">{formState.error}</p>
      )}

      <LabledInput
        id="first_name"
        name="first_name"
        label="First Name"
        error={formState.errors?.first_name}
      />

      <LabledInput
        id="last_name"
        name="last_name"
        label="Last Name"
        error={formState.errors?.last_name}
      />

      <LabledInput
        id="email"
        name="email"
        label="Email"
        error={formState.errors?.email}
      />

      <PasswordInput
        id="password"
        name="password"
        label="Password"
        error={formState.errors?.password}
      />

      <PasswordInput
        id="confirm_password"
        name="confirm_password"
        label="Confirm Password"
        error={formState.errors?.confirm_password}
      />

      <Button type="submit" className="w-full py-6 text-lg" disabled={formState.pending}>
        {formState.pending ? "Signing up..." : "Sign up"}
      </Button>
    </form>
  );
};

export default AuthForm;
