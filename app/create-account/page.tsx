"use client";

import AccountBtn from "@/components/AccountBtn";
import Input from "@/components/Input";
import { createAccount } from "./actions";
import { useActionState } from "react";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function CreateAccount() {
  const [state, formAction] = useActionState(createAccount, null);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg p-8 shadow-lg dark:shadow-zinc-700">
        <h1 className="mb-6 text-center text-2xl font-bold">Create Account</h1>
        <form action={formAction} className="space-y-4">
          <Input
            name="email"
            type="email"
            placeholder="you@abc.com"
            required
            errors={state?.fieldErrors.email}
          />
          <Input
            name="username"
            type="text"
            placeholder="Username"
            required
            errors={state?.fieldErrors.username}
            minLength={3}
            maxLength={10}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            errors={state?.fieldErrors.password}
            minLength={PASSWORD_MIN_LENGTH}
          />
          <Input
            name="confirm_password"
            type="password"
            placeholder="Confirm Password"
            required
            errors={state?.fieldErrors.confirm_password}
            minLength={PASSWORD_MIN_LENGTH}
          />
          <AccountBtn text="Create Account" />
        </form>
      </div>
    </div>
  );
}
