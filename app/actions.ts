"use server";

import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Invalid email format." })
    .refine((email) => email.endsWith("@zod.com"), {
      message: "Email must end with @zod.com",
    }),
  id: z
    .string({ required_error: "ID is required." })
    .min(6, { message: "ID must be longer than 5 characters" }),
  password: z
    .string({ required_error: "Password is required." })
    .min(10, { message: "Password must be at least 10 characters long" })
    .regex(/\d/, { message: "Password must contain at least one number" }),
});

interface FormState {
  errors?: {
    email?: string[];
    id?: string[];
    password?: string[];
  };
  message?: string;
}

export async function logIn(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = {
    email: formData.get("email"),
    id: formData.get("id"),
    password: formData.get("password"),
  };

  const result = loginSchema.safeParse(data);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    return {
      errors: {
        email: fieldErrors.email,
        id: fieldErrors.id,
        password: fieldErrors.password,
      },
    };
  }

  return { message: "Welcome Back!" };
}
