import { Input } from '../ui/input';
import { Textarea } from "@/components/ui/textarea";
import React from 'react';

type LabeledInputProps = {
  label: string;
  id: string;
  name: string;
  type?: string;
  error?: string | null;
  placeholder?: string;
  required?: boolean;
};

const LabledInput: React.FC<LabeledInputProps> = ({
  label,
  id,
  type = 'text',
  name,
  error = null,
  placeholder = 'Input',
  required = false,
}) => {
  return (
    <div className="relative space-y-1">
      <div className="relative">
        {type === 'textarea' ? (
          <Textarea
            id={id}
            name={name}
            placeholder=" "
            required={required}
            className="h-[3rem] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        ) : (
          <Input
            autoComplete="off"
            id={id}
            name={name}
            placeholder=""
            required={required}
            type={type}
            className="h-[3rem] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        )}

        <label
          htmlFor={id}
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:font-semibold peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[1.5rem] peer-focus:top-2 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 peer-focus:start-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>

      {error && (
        <p className="text-red-500 text-sm font-medium px-1">{error}</p>
      )}
    </div>
  );
};

export default LabledInput;
