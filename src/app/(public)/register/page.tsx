"use client"

import InputRegister from "@/app/componets/input-register";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import Link from "next/link";
import { CreateUserFormData, schemaRegister } from "../validations/registerSchema";
import { useState } from "react";
import { useRouter } from "next/navigation";



const Register = () => {

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateUserFormData>({
        mode: "all",
        resolver: zodResolver(schemaRegister),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
        },
    });

    const createUser = async (data: CreateUserFormData) => {
        setIsLoading(true);

        try {
            console.log(data);
            await new Promise(resolve => setTimeout(resolve, 1500));

            router.push("/");
        } catch (error) {
            console.error("Erro ao criar usuário", error);
        } finally {
            setIsLoading(false);
        }

    };
    return (

        <form onSubmit={handleSubmit(createUser)} className="flex flex-col p-4">
            <div className="-0">
                <h1 className="flex justify-center font-medium font-poppins text-3xl mt-1 mb-6">Acesse a plataforma</h1>
                <h4 className=" font-regular font-poppins text-base mb-">Se você ja tem uma conta faça Login</h4>

                <div className="flex gap-1 mb-12">
                    <span className="font-regular font-poppins text-base">Você pode fazer</span>

                    <Link href="/login">
                        <span className="text-blue-500 hover:underline font-semibold font-poppins text-base">
                            Login aqui!
                        </span>
                    </Link>
                </div>

            </div>

            <div className="form-group">
                <label htmlFor="email" className="btn-label-primary">
                    E-mail
                </label>
                <div >

                    <InputRegister
                        id="email"
                        placeholder="Digite seu endereço de e-mail"
                        type="email"
                        className={`flex-1 btn-input-primary ${errors.email ? "input-error" : ""}`}
                        {...register("email")}
                    />
                </div>
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="name" className="btn-label-primary">Nome</label>
                <InputRegister
                    id="name"
                    placeholder="Digite seu nome"
                    type="name"
                    className={`btn-input-primary ${errors.email ? 'input-error' : ''}`}
                    {...register("name")}
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="password" className="btn-label-primary">Senha</label>
                <InputRegister
                    id="password"
                    placeholder="Digite sua senha"
                    type="password"
                    className={`btn-input-primary ${errors.password ? 'input-error' : ''}`}
                    {...register("password")}
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword" className="btn-label-primary">Comfirme sua senha</label>
                <InputRegister
                    id="confirmPassword"
                    placeholder="Comfirme sua senha"
                    type="Password"
                    className={`btn-input-primary ${errors.confirmPassword ? 'input-error' : ''}`}
                    {...register("confirmPassword")}
                />
                {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
            </div>
            <div>
                <div>
                    <button
                        className="w-full h-12 md:h-14 rounded-full bg-[#0A1CA4] hover:bg-[#0D26DF] text-white font-poppins font-medium mt-5 mb-2 cursor-pointer transition-colors lg:mt-15"
                        type="submit"
                    >
                        {isLoading ? "Cadastrando..." : "Cadastre-se"}
                    </button>
                </div>
            </div>
        </form>

    )
}; export default Register;