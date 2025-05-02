"use client";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}

export default function AccountBtn({ text }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="focus:ring-opacity-50 bg-t-blue/80 hover:bg-t-blue w-full cursor-pointer rounded-full px-4 py-2 font-semibold text-white transition-all ease-in-out disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Loading..." : text}
    </button>
  );
}
