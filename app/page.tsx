"use client";

import { useFormStatus } from "react-dom";
import { logIn } from "./actions";
import { useActionState } from "react";

interface FormState {
  errors?: {
    email?: string[]; 
    id?: string[];
    password?: string[];
  };
  message?: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="focus:ring-opacity-50 w-full cursor-pointer rounded-md bg-orange-500 px-4 py-2 font-semibold text-white transition duration-150 ease-in-out hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70" 
    >
      {pending ? "Loading..." : "Log in"}
    </button>
  );
}

export default function Home() {
  const initialState: FormState = {};
  const [state, formAction] = useActionState(logIn, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Log In
        </h1>
        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required 
              placeholder="you@zod.com" 
              className={`w-full rounded-md border px-3 py-2 shadow-sm focus:border-orange-500 focus:ring-orange-500 focus:outline-none ${
                state?.errors?.email ? "border-red-500" : "border-gray-300" 
              }`}
            />
            <p
              className={`mt-1 text-xs text-red-500 ${!state?.errors?.email && "invisible"}`}
            >
              {state?.errors?.email
                ? state.errors.email[0]
                : "error placeholder"}
            </p>
          </div>

          <div>
            <label
              htmlFor="id"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              ID
            </label>
            <input
              id="id"
              name="id"
              type="text"
              required 
              placeholder="ID" 
              className={`w-full rounded-md border px-3 py-2 shadow-sm focus:border-orange-500 focus:ring-orange-500 focus:outline-none ${
                state?.errors?.id ? "border-red-500" : "border-gray-300" 
              }`}
            />
            <p
              className={`mt-1 text-xs text-red-500 ${!state?.errors?.id && "invisible"}`}
            >
              {state?.errors?.id ? state.errors.id[0] : "error placeholder"}
            </p>
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              className={`w-full rounded-md border px-3 py-2 shadow-sm focus:border-orange-500 focus:ring-orange-500 focus:outline-none ${
                state?.errors?.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <p
              className={`mt-1 text-xs text-red-500 ${!state?.errors?.password && "invisible"}`}
            >
              {state?.errors?.password
                ? state.errors.password[0]
                : "error placeholder"}
            </p>
          </div>

          <SubmitButton />

          {state?.message && (
            <p className="mt-2 text-center text-green-600">{state.message}</p>
          )}
        </form>
      </div>
    </div>
  );
}
