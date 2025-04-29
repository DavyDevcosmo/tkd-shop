"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";
import { signIn } from "next-auth/react";

import InputLogin from "@/app/componets/Input-login";
import { loginUser } from "../actions/loginUser";

// Tipagem do estado de login
type LoginState = {
    success: boolean;
    errors: {
        email?: string[];
        password?: string[];
    };
};

// Estado inicial
const initialState: LoginState = {
    success: false,
    errors: {},
};

const Login = () => {
    const [state, formAction, pending] = useActionState(
        async (_prevState: LoginState, formData: FormData): Promise<LoginState> => {
            const email = formData.get("email")?.toString() || "";
            const password = formData.get("password")?.toString() || "";

            try {
                const response = await loginUser({ email, password });

                if (response.success) {
                    window.location.href = "/";
                    return { success: true, errors: {} };
                }

                return {
                    success: false,
                    errors: response.errors ?? { email: ["Erro inesperado."] },
                };
            } catch (error: any) {
                return {
                    success: false,
                    errors: { email: ["Erro no servidor. Tente novamente."] },
                };
            }
        },
        initialState
    );

    return (
        <form action={formAction} className="flex flex-col p-4">
            <h1 className="flex justify-center font-medium font-poppins text-3xl mt-1 mb-6">
                Acesse a plataforma
            </h1>
            <h4 className="font-regular font-poppins text-base mb-2">
                Se você não tem uma conta, registre-se
            </h4>

            <div className="flex gap-1 mb-12">
                <span className="font-regular font-poppins text-base">Você pode se</span>
                <Link href="/auth/register">
                    <span className="text-blue-500 hover:underline font-semibold font-poppins text-base">
                        registrar aqui!
                    </span>
                </Link>
            </div>

            {/* Campo Email */}
            <div className="form-group">
                <label htmlFor="email" className="btn-label-primary">E-mail</label>
                <div className="relative">
                    <InputLogin
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Digite seu endereço de e-mail"
                        className="btn-input-primary pl-10"
                        defaultValue=""
                    />
                    {state.errors?.email && (
                        <span className="text-red-500 text-sm">{state.errors.email[0]}</span>
                    )}
                </div>
            </div>

            {/* Campo Senha */}
            <div className="form-group mt-4">
                <label htmlFor="password" className="btn-label-primary">Senha</label>
                <InputLogin
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    className="btn-input-primary"
                    defaultValue=""
                />
                {state.errors?.password && (
                    <span className="text-red-500 text-sm">{state.errors.password[0]}</span>
                )}
            </div>

            <button
                type="submit"
                className="w-full h-12 md:h-14 rounded-full bg-[#0A1CA4] hover:bg-[#0D26DF] text-white font-poppins font-medium mt-24 mb-2 cursor-pointer transition-colors lg:mt-15"
            >
                {pending ? "Entrando..." : "Login"}
            </button>

            <div className="mt-5 mb-5 flex flex-col items-center">
                <h5 className="text-[#B5B5B5] font-poppins text-base">ou continuar com</h5>
                <div className="flex gap-2 mt-2 mb-2">
                    <button
                        type="button"
                        onClick={() => signIn("google", { callbackUrl: "/" })}
                        className="btn-social-login flex items-center gap-5"
                    >
                        <Image src="/img/google.svg" alt="Google" width={36} height={36} />
                    </button>

                    <button
                        type="button"
                        onClick={() => signIn("facebook", { callbackUrl: "/" })}
                        className="btn-social-login flex items-center gap-5 px-5"
                    >
                        <Image src="/img/Facebook.svg" alt="Facebook" width={36} height={36} />
                    </button>

                    <button
                        type="button"
                        onClick={() => signIn("apple", { callbackUrl: "/" })}
                        className="btn-social-login flex items-center gap-5"
                    >
                        <Image src="/img/apple.svg" alt="Apple" width={36} height={36} />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Login;
