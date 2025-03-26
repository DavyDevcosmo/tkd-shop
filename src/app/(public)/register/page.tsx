"use client"

import { useForm } from "react-hook-form";

const Register = () => {
    return (
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    placeholder="Digite seu email"
                    type="email" />
            </div>

            <div>
                <label htmlFor="campo-senha">Senha</label>
                <input
                    id="campo-password"
                    placeholder="Digite sua senha"
                    type="password" />
            </div>

            <div>
                <label htmlFor="confimPassword">Confirme sua senha</label>
                <input
                    id="confimPassword"
                    placeholder="Digite sua senha"
                    type="password" />
            </div>
        </form>
    )
}; export default Register;