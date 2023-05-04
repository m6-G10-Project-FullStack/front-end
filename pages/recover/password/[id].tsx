import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { confirmPasswordSchema } from "../../../src/schemas/shemas";
import { useRouter } from "next/router";
import { Header } from "../../../src/components/Header";
import { Button } from "../../../src/components/Button";
import { BsArrowLeftShort } from "react-icons/bs";
import api from "../../../src/services/api";

interface iFormData {
  password: string;
  confirmPassword: string;
}

const RecoverPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<iFormData>({
    resolver: yupResolver(confirmPasswordSchema),
    mode: "onBlur",
  });

  const router = useRouter();

  const { id } = router.query;

  const handleForm = async (data: iFormData) => {
    await api
      .post(`/resetPassword/${id}`, {
        data,
      })
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        reset();
      });
  };

  return (
    <>
      <Head>
        <title>Motors Shop - Recupere sua senha</title>
      </Head>

      <Header />

      <main
        className="mt-20 w-full h-full flex items-center justify-center bg-gray7 shadow-md rounded"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <form
          className="bg-whitefixed flex flex-col gap-4 max-w-md min-w-[440px] py-10 px-11 relative"
          onSubmit={handleSubmit(handleForm)}
        >
          <h1 className="text-lg pb-4 font-bold">Recupere sua senha!</h1>

          <div className="flex flex-col gap-4 pb-4">
            <label className="font-bold" htmlFor="password">
              Senha
            </label>
            <input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Nova senha"
              className="p-3 border-2 border-gray6 rounded outline-none"
            />
            {errors.password?.message && (
              <span className="text-alert1 font-semibold">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-4 pb-4">
            <label className="font-bold" htmlFor="confirm">
              Confirme sua senha
            </label>
            <input
              {...register("confirmPassword")}
              id="confirm"
              type="password"
              placeholder="Confirmação da nova senha"
              className="p-3 border-2 border-gray6 rounded outline-none"
            />
            {errors.confirmPassword?.message && (
              <span className="text-alert1 font-semibold">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <Button type="submit" variant="brand-1">
            Confirmar
          </Button>

          <Link className="absolute top-8 right-8 flex items-center" href="/">
            <BsArrowLeftShort /> Voltar
          </Link>
        </form>
      </main>
    </>
  );
};

export default RecoverPassword;
