"use server";

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

  const email = formData.get("email") as string | null;
  const id = formData.get("id") as string | null;
  const password = formData.get("password") as string | null;

  const errors: FormState["errors"] = {};

  if (!email) {
    errors.email = ["Email is required."];
  }
  if (!id) {
    errors.id = ["ID is required."];
  }
  if (!password) {
    errors.password = ["Password is required."];
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  if (password !== "12345") {
    return {
      errors: {
        password: ["Wrong Password"],
      },
    };
  }

  return { message: "Welcome Back!" };
}
