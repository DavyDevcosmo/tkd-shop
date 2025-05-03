// app/actions/loginUser.ts
"use server";

import { schemaLogin } from "../validations/registerSchema";


export async function loginUser(formData: FormData) {
  const data = {
    email: formData.get("email")?.toString() || "",
    password: formData.get("password")?.toString() || "",
  };

  const parsed = schemaLogin.safeParse(data);

  if (!parsed.success) {
    console.log("Erro de validação login:", parsed.error.flatten().fieldErrors);
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("Login feito com:", parsed.data);

  return { success: true, errors: {} };
}
