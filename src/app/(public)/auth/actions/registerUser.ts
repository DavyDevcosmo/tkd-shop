"use server";

import bcrypt from "bcryptjs";

import { schemaRegister } from "../validations/registerSchema";
import db from "../../../../../prisma/db";


export async function registerUser(formData: FormData) {
 
  const data = {
    name: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    password: formData.get("password")?.toString() || "",
    confirmPassword: formData.get("confirmPassword")?.toString() || "",
  };

  
  const parsed = schemaRegister.safeParse(data);
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

 
  const existingUser = await db.user.findUnique({
    where: { email: parsed.data.email },
  });
  if (existingUser) {
    return { success: false, errors: { email: ["E-mail já cadastrado"] } };
  }


  const hashedPassword = await bcrypt.hash(parsed.data.password, 10);

 
  const user = await db.user.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      
    },
  });

return { success: true, errors: {} };

}
