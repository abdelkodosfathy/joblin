'use client';
// components/LoginWithGoogle/LoginWithGoogle.tsx

import Image from "next/image";
import { Button } from "../ui/button";
import googleIcon from "@/public/google.svg";

type LoginWithGoogleProps = {
  onClick?: () => void;
  label?: string;
};

const LoginWithGoogle = ({ onClick, label = "Login with Google" }: LoginWithGoogleProps) => {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full py-6 text-lg flex items-center justify-center gap-2"
      onClick={onClick}
    >
      <Image alt="Google icon" src={googleIcon} width={20} height={20} />
      {label}
    </Button>
  );
};

export default LoginWithGoogle;
