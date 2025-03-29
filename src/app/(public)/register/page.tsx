"use client"

import InputRegister from "@/app/componets/button-register";
import { useForm } from "react-hook-form";
import schemaRegister, { FormInputTypes } from "./validations/registerSchema";
import { zodResolver } from '@hookform/resolvers/zod';

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
        resolver: zodResolver(schemaRegister),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (data: FormInputTypes) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4">
            <div className="-0">
                <h1 className="flex justify-center font-medium font-poppins text-3xl mt-1 mb-5">Acesse a plataforma</h1>
                <h4 className=" font-regular font-poppins text-sm mb-7">Crie sua conta!</h4>
            </div>

            <div className="form-group">
                <label htmlFor="email" className="btn-label-primary" >E-mail</label>
                <InputRegister
                    id="email"
                    placeholder="Digite seu endereço de e-mail"
                    type="email"
                    className={`btn-input-primary ${errors.email ? 'input-error' : ''}`}
                    {...register("email")}
                />
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
                <button className="
                w-full h-12 md:h-14 rounded-full bg-[#0A1CA4] hover:bg-[#0D26DF] text-white font-poppins font-medium mt-5 mb-2 cursor-pointer transition-colors lg:mt-15"
                >Cadastre-se</button>
            </div>
        </form>
    )
}; export default Register;