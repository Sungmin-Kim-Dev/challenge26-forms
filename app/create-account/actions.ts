"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
import db from "@/lib/db";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    email: z
      .string({ required_error: "Email is required." })
      .email()
      .toLowerCase(),
    username: z
      .string({ required_error: "Username is required." })
      .min(3, "Username must be at least 3 characters long")
      .max(10, "Username must be up to 10 characters long")
      .toLowerCase()
      .trim(),
    password: z
      .string({ required_error: "Password is required." })
      .min(PASSWORD_MIN_LENGTH, "Password must be at least 5 characters long")
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z
      .string({ required_error: "Password is required." })
      .min(PASSWORD_MIN_LENGTH, "Password must be at least 5 characters long")
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
  })
  .superRefine(async ({ username }, ctx) => {
    const user = await db.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "This Username is already taken.",
        path: ["username"],
        fatal: true,
      });
      return z.NEVER;
    }
  })
  .superRefine(async ({ email }, ctx) => {
    const user = await db.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "There is an account already registered with that email.",
        path: ["email"],
        fatal: true,
      });
      return z.NEVER;
    }
  })
  .refine(
    (data) =>
      !data.password.toLowerCase().includes(data.username.toLowerCase()),
    {
      message: "Username cannot be included in Password",
      path: ["password"],
    },
  )
  .refine(checkPasswords, {
    message: "Both passwords should be the same!",
    path: ["confirm_password"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  const result = await formSchema.safeParseAsync(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(result.data.password, 12);
    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });
    const session = await getSession();
    session.id = user.id;
    await session.save();
    redirect("/profile");
  }
}
