"use client";

import AccountBtn from "@/components/AccountBtn";
import Input from "@/components/Input";
import { createAccount } from "./actions";
import { useActionState } from "react";

export default function CreateAccount() {
  const [state, formAction] = useActionState(createAccount, null);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg p-8 shadow-lg">
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
            name="id"
            type="text"
            placeholder="ID"
            required
            errors={state?.fieldErrors.id}
          />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            errors={state?.fieldErrors.password}
          />
          <Input
            name="confirm_password"
            type="password"
            placeholder="Confirm Password"
            required
            errors={state?.fieldErrors.password}
          />
          <AccountBtn text="Create Account" />
        </form>
      </div>
    </div>
  );
}
