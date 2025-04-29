"use server"

import { schemaRegister } from "../validations/registerSchema"

export async function registerUser(formData: FormData) {
  const data = {
    name: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    password: formData.get("password")?.toString() || "",
    confirmPassword: formData.get("confirmPassword")?.toString() || "",
  };

  const parsed = schemaRegister.safeParse(data);

  if (!parsed.success) {
    console.log("Erro de validação:", parsed.error.flatten().fieldErrors);
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("Usuário criado:", parsed.data);


  return { success: true, errors: {} };
}
