"use client"

import InputRegister from "@/app/componets/button-register";
import { useForm } from "react-hook-form";

const Register = () => {
    return (
        <form className="flex flex-col p-4">
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
                    className="btn-input-primary"

                />
            </div>

            <div className="form-group">
                <label htmlFor="name" className="btn-label-primary">Nome</label>
                <InputRegister
                    id="name"
                    placeholder="Digite seu nome"
                    type="name"
                    className="btn-input-primary"
                />
            </div>

            <div className="form-group">
                <label htmlFor="campo-senha" className="btn-label-primary">Senha</label>
                <InputRegister
                    id="campo-password"
                    placeholder="Digite sua senha"
                    type="password"
                    className="btn-input-primary"
                />
            </div>

            <div className="form-group">
                <label htmlFor="confimPassword" className="btn-label-primary">Comfirme sua senha</label>
                <InputRegister
                    id="confimPassword"
                    placeholder="Comfirme sua senha"
                    type="password"
                    className="btn-input-primary"
                />
            </div>
            <div>
                <button className="
                w-full h-12 md:h-14 rounded-full bg-[#0A1CA4] hover:bg-[#0D26DF] text-white font-poppins font-medium mt-5 mb-2 cursor-pointer transition-colors lg:mt-15"
                >Cadastre-se</button>
            </div>
        </form>
    )
}; export default Register;