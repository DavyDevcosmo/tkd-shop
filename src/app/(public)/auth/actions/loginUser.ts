"use server";

import { signIn } from "next-auth/react";

export async function loginUser(data: { email: string; password: string }) {
  const result = await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: false,
  });

  if (result?.error) {
    return {
      success: false,
      errors: result.error,
    };
  }

  return {
    success: true,
  };
}
