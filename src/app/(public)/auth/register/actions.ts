"use server"

import { parse } from "path"
import { schemaRegister } from "../validations/registerSchema"
import { redirect } from "next/navigation"

export async function createUser(formData: FormData) {
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    }

    const parsed = schemaRegister.safeParse(data)

    if (!parsed.success) {
        console.log("Erro de validação:", parsed.error.flatten().fieldErrors)
        return { sucess: false, errors: parsed.error.flatten().fieldErrors}
    }

    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Usuario criado:", parsed.data)

    redirect("/")
}