import React, { useContext, useState } from "react";
import { Header } from "../../src/components/Header";
import { Button } from "../../src/components/Button";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../src/contexts/authContext";
import { useAuth } from "../../src/contexts/authContext";
import { SchemaLogin } from "../../src/schemas/shemas";
import { yupResolver } from "@hookform/resolvers/yup";
export interface iLoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const { HandleFormLogin, router } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormInputs>({
    resolver: yupResolver(SchemaLogin),
  });

  return (
    <>
      <Header />
      <main className="w-full flex justify-center items-center h-screen bg-gray8 pb-[20px] ">
        <form
          onSubmit={handleSubmit(HandleFormLogin)}
          className="flex flex-col justify-center w-[412px] md:w-[343px] shadow-md   rounded items-stretch px-11 py-12 min-w-[320px] gap-8 m-5 mt-10 bg-whitefixed"
        >
          <h1 className="text-left font-lex font-semibold">Login</h1>
          <label htmlFor="email" className="font-semibold">
            Usuário
          </label>
          <input
            type="email"
            placeholder="Digitar usuário"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
          <label htmlFor="email" className="font-semibold">
            Senha
          </label>
          <input
            type="password"
            placeholder="Digitar senha"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
          <p className="text-right text-gray1">
            <a href="#">Esqueci minha senha</a>
          </p>
          <Button type="submit" variant="brand-1">
            Entrar
          </Button>
          <p className="text-center">Ainda não possui conta?</p>
          <Button onClick={() => router.push("/register")} variant="gray-6">
            Cadastrar
          </Button>
        </form>
      </main>
    </>
  );
};
export default Login;
