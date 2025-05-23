"use client"

import InputRegister from "@/app/componets/Input-register";
import { registerUser } from "../actions/registerUser";
import Link from "next/link";
import { useActionState } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type RegisterState = {
  success: boolean;
  errors: {
    email?: string[];
    name?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
};

const initialState: RegisterState = {
  success: false,
  errors: {},
};

const Register = () => {
  const router = useRouter();


  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [state, formAction, pending] = useActionState(
    async (_prevState: RegisterState, _formData: FormData) => {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("name", name);
      formData.append("password", password);
      formData.append("confirmPassword", confirmPassword);

      return await registerUser(formData);
    },
    initialState
  );

  useEffect(() => {
    if (state.success) {
      router.push("/");
    }
  }, [state.success, router]);

  return (
    <form action={formAction} className="flex flex-col p-4">
      <h1 className="flex justify-center font-medium font-poppins text-3xl mt-1 mb-6">
        Acesse a plataforma
      </h1>
      <h4 className="font-regular font-poppins text-base mb-2">
        Se você já tem uma conta faça Login
      </h4>

      <div className="flex gap-1 mb-12">
        <span className="font-regular font-poppins text-base">Você pode fazer</span>
        <Link href="/auth/login">
          <span className="text-blue-500 hover:underline font-semibold font-poppins text-base">
            Login aqui!
          </span>
        </Link>
      </div>

      <div className="form-group">
        <label htmlFor="email" className="btn-label-primary">E-mail</label>
        <InputRegister
          id="email"
          name="email"
          placeholder="Digite seu endereço de e-mail"
          type="email"
          className="btn-input-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {state.errors.email && <span className="text-red-500 text-sm">{state.errors.email[0]}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="name" className="btn-label-primary">Nome</label>
        <InputRegister
          id="name"
          name="name"
          placeholder="Digite seu nome"
          type="text"
          className="btn-input-primary"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {state.errors.name && <span className="text-red-500 text-sm">{state.errors.name[0]}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="password" className="btn-label-primary">Senha</label>
        <InputRegister
          id="password"
          name="password"
          placeholder="Digite sua senha"
          type="password"
          className="btn-input-primary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {state.errors.password && <span className="text-red-500 text-sm">{state.errors.password[0]}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword" className="btn-label-primary">Confirme sua senha</label>
        <InputRegister
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirme sua senha"
          type="password"
          className="btn-input-primary"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {state.errors.confirmPassword && <span className="text-red-500 text-sm">{state.errors.confirmPassword[0]}</span>}
      </div>

      <button
        type="submit"
        className="w-full h-12 md:h-14 rounded-full bg-[#0A1CA4] hover:bg-[#0D26DF] text-white font-poppins font-medium mt-5 mb-2 cursor-pointer transition-colors"
      >
        {pending ? "Cadastrando..." : "Cadastre-se"}
      </button>
    </form>
  );
};

export default Register;
