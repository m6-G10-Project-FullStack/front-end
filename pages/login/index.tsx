import React from "react";
import { Header } from "../../src/components/Header";
import { Button } from "../../src/components/Button";

const Login = () => {
  return (
    <>
      <Header />
      <main className="w-full flex justify-center items-center bg-gray8 ">
        <form className="flex flex-col justify-center w-[412px] md:w-[343px] shadow-md h-[542px] md:h-[542px] rounded items-stretch px-11 py-12 min-w-[320px] gap-8 m-5 mt-10 bg-whitefixed">
          <h1 className="text-left font-lex font-semibold">Login</h1>
          <label htmlFor="email" className="font-semibold">
            Usuário
          </label>
          <input name="email" type="email" placeholder="Digitar usuário" />
          <label htmlFor="email" className="font-semibold">
            Senha
          </label>
          <input type="password" placeholder="Digitar senha" />
          <p className="text-right text-gray1">
            <a href="#">Esqueci minha senha</a>
          </p>
          <Button variant="brand-1">Entrar</Button>
          <p className="text-center">Ainda não possui conta?</p>
          <Button variant="gray-6">Cadastrar</Button>
        </form>
      </main>
    </>
  );
};
export default Login;
