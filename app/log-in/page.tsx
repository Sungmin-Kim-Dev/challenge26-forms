"use client";

import { logIn } from "./actions";
import { useActionState } from "react";
import Link from "next/link";
import Input from "@/components/Input";
import AccountBtn from "@/components/AccountBtn";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function LogIn() {
  const [state, formAction] = useActionState(logIn, null);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg p-8 shadow-lg dark:shadow-zinc-700">
        <h1 className="mb-6 text-center text-2xl font-bold">Log In</h1>
        <form action={formAction} className="space-y-4">
          <Input
            name="email"
            type="email"
            placeholder="you@abc.com"
            required
            errors={state?.fieldErrors.email}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            errors={state?.fieldErrors.password}
            minLength={PASSWORD_MIN_LENGTH}
          />
          <AccountBtn text="Log In" />
        </form>
        <div className="mt-3 flex justify-center gap-2 text-sm">
          <span className="text-text-sub dark:text-text-sub-dark">
            Don't have an account?
          </span>
          <Link href="/create-account" className="text-t-blue hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
