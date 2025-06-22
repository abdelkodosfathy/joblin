'use client';

import { useState } from 'react';
import Image from 'next/image';
import closedEye from '@/public/eye-closed.svg';
import eye from '@/public/eye.svg';
import { Input } from './input';

type PasswordInputProps = {
  label: string;
  id: string;
  name: string;
  error?: string | null;
  placeholder?: string;
  required?: boolean;
  type?: string;
};

const PasswordInput = ({
  label,
  id,
  name,
  error = null,
  placeholder = 'Input',
  required = false,
  type = 'password',
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <div className="relative">
        <Input
          autoComplete="off"
          id={id}
          name={name}
          placeholder=""
          required={required}
          type={!showPassword ? 'password' : 'text'}
          className="h-[3rem] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        />

        <label
          htmlFor={id}
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:font-semibold peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 peer-focus:start-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        <button
          type="button"
          title={showPassword ? 'Click to hide password' : 'Click to show password'}
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2"
        >
          <Image
            src={showPassword ? eye : closedEye}
            alt={showPassword ? 'Hide password' : 'Show password'}
            width={20}
            height={20}
          />
        </button>
      </div>

      {error && (
        <p className="text-red-500 text-sm font-medium px-1">{error}</p>
      )}
    </div>
  );
};

export default PasswordInput;
