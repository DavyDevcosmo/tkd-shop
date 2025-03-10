"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schemaSignup = z.object({
  email: z
    .string()
    .min(1, "O campo é obrigatorio")
    .email("|Email não é válido")
    .transform((value) => value.toLocaleLowerCase()),

  password: z.string()
    .min(6, "Senha deve ter no minimo 6 caracteres"),
  passwordConfirmation: z.string()
    .min(1, "Este campo não pode ser vazio"),
})
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não coincidem",
    path: ["passwordConfirmation"],
  });

type FormInputTypes = z.infer<typeof schemaSignup>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormInputTypes>({
    mode: "all",
    resolver: zodResolver(schemaSignup),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = (data: FormInputTypes) => {
    console.log(data);
    
  };

  return (
    <>
      <h1>Insira seus dados!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <Label htmlFor="campo-email">Email</Label>
          <input
            id="campo-email"
            placeholder="Digite seu email"
            type="email"
            className={errors.email ? 'input-error' : ''}
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </fieldset>

        <fieldset>
          <label htmlFor="campo-senha">Senha</label>
          <input
            id="campo-password"
            placeholder="Digite sua senha"
            type="password"
            className={errors.password ? 'input-error' : ''}
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </fieldset>

        <fieldset>
          <label htmlFor="campo-senha-confimacao">Senha</label>
          <input
            id="campo-senha-confimacao"
            placeholder="Repita a senha anterior"
            type="password"
            className={errors.passwordConfirmation ? 'input-error' : ''}
            {...register("passwordConfirmation")}
          />
          {errors.passwordConfirmation && <p>{errors.passwordConfirmation.message}</p>}
        </fieldset>

        <button type="submit">Cadastro</button>
      </form>
    </>
  );
};

export default Register;