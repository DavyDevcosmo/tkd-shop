"use client"

import InputRegister from "@/app/componets/input-register";
import Link from "next/link";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { loginUser } from "../actions/loginUser";

import GoogleLogo from "../../../componets/googleLogo";

type LoginState = {
    success: boolean;
    errors: {
        email?: string[];
        password?: string[];
    };
};

const initialState: LoginState = {
    success: false,
    errors: {},
};

const Login = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [state, formAction, pending] = useActionState(
        async (_prevState: LoginState, _formData: FormData) => {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);

            return await loginUser(formData);
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
                Bem-vindo de volta!
            </h1>

            <div className="flex gap-1 mb-6">
                <span className="font-regular font-poppins text-base">Novo por aqui?</span>
                <Link href="/auth/register">
                    <span className="text-blue-500 hover:underline font-semibold font-poppins text-base">
                        Crie sua conta
                    </span>
                </Link>
            </div>

            <div className="form-group">
                <label htmlFor="email" className="btn-label-primary">E-mail</label>
                <InputRegister
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="btn-input-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {state.errors.email && <span className="text-red-500 text-sm">{state.errors.email[0]}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="password" className="btn-label-primary">Senha</label>
                <InputRegister
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                    className="btn-input-primary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {state.errors.password && <span className="text-red-500 text-sm">{state.errors.password[0]}</span>}
            </div>

            <button
                type="submit"
                className="w-full h-12 md:h-14 rounded-full bg-[#0A1CA4] hover:bg-[#0D26DF] text-white font-poppins font-medium mt-5 mb-4"
            >
                {pending ? "Entrando..." : "Entrar"}
            </button>

            <div className="flex items-center justify-center gap-2 my-4">
                <span className="w-1/5 border-t border-gray-300"></span>
                <span className="text-gray-500 text-sm">ou continue com</span>
                <span className="w-1/5 border-t border-gray-300"></span>
            </div>

            <button
                type="button"
                onClick={() => signIn("github", { redirectTo: "/" })}
                className="w-full h-12 md:h-14 flex items-center justify-center gap-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
            >
                <GoogleLogo />
            </button>

        </form>
    );
};

export default Login;
