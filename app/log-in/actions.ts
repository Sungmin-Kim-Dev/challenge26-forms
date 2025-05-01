"use server";

import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Invalid email format." }),
  // .refine((email) => email.endsWith("@zod.com"), {
  //   message: "Email must end with @zod.com",
  // }),
  id: z
    .string({ required_error: "ID is required." })
    .min(6, { message: "ID must be longer than 5 characters" }),
  password: z
    .string({ required_error: "Password is required." })
    .min(10, { message: "Password must be at least 10 characters long" })
    .regex(/\d/, { message: "Password must contain at least one number" }),
});


export async function logIn(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = {
    email: formData.get("email"),
    id: formData.get("id"),
    password: formData.get("password"),
  };

  const result = loginSchema.safeParse(data);

  if (!result.success) {
    return result.error.flatten();
  }

  // return { message: "Welcome Back!" };
}
