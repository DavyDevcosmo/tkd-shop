import {z} from 'zod';

const schemaRegister = z.object({
    email: z
         .string()
         .min(1, "O campo é obrigatório")
         .email("Email nâo é válido")
         .transform((value) => value.toLocaleLowerCase()),
    name: z
    .string()
    .min(1, "O campo é obrigatório")
    .transform((name) => {
      return name
        .trim()
        .split(' ') 
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1).toLowerCase(); 
        })
        .join(' ');
    }),
    password: z
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z
         .string()
         .min(1, "Este campo não pode ser vazio")
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não coincidem",
        path: ["confirmPassword"],

    }); 
const schemaLogin= z.object({
    email: z
        .string()
        .min(1, "Campo e obrigatório")
        .transform((value) => value.toLocaleLowerCase()),
    password: z
        .string()
        .min(6, "O campo é obrigatório")
        .refine((value) => value.length >= 2,{
            message: "O nome deve ter pelo menos 2 caracteres",
        })
    });

    export {schemaRegister, schemaLogin};
    
    


    export type CreateUserFormData = z.infer<typeof schemaRegister>;
    export type LoginInputTypes = z.infer<typeof schemaLogin>;


