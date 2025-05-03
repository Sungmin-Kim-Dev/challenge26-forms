import { InputHTMLAttributes } from "react";

interface InputProps {
  name: string;
  errors?: string[];
}

export default function Input({
  name,
  errors = [],
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <input
        name={name}
        className="focus:ring-t-blue ring-t-xl-gray dark:ring-t-dark-gray mb-2 w-full rounded-md border border-none py-2 ps-3 ring-2 transition-all ease-in-out focus:ring-4 focus:outline-none"
        {...rest}
      />
      {errors?.map((error, index) => (
        <p key={index} className="text-xs text-red-500">
          {error}
        </p>
      ))}
    </div>
  );
}
