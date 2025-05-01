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
        className="focus:border-t-blue focus:ring-t-blue border-t-light-gray mb-2 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none"
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
