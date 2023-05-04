import Head from "next/head";
import { useRouter } from "next/router";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { confirmEmailSchema } from "../../src/schemas/shemas";
import { Header } from "../../src/components/Header";
import { Button } from "../../src/components/Button";
import api from "../../src/services/api";
import { Modal } from "../../src/components/Modal";
import { useState } from "react";

interface iFormData {
  email: string;
}

const Recover = () => {
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [sucessMessage, setSuccessMessage] = useState("");

  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<iFormData>({
    resolver: yupResolver(confirmEmailSchema),
  });

  const handleForm = async (data: iFormData) => {
    await api
      .post("/resetPassword", {
        data,
      })
      .then(() => {
        setOpenSuccessModal(true);
        setSuccessMessage("Confirma seu email e entre no link fornecido!");
      })
      .catch(() => {
        setOpenErrorModal(true);
        setErrorMessage(
          "O email não foi encontrado! Por favor verifique e tente novamente"
        );
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <>
      <Head>
        <title>Motorsh Shop - Recupere sua senha</title>
      </Head>

      <Header />

      <main
        className="mt-20 w-full h-full flex items-center justify-center bg-gray7 shadow-md rounded"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <form
          className="bg-whitefixed flex flex-col gap-4 max-w-md py-10 px-11 relative"
          onSubmit={handleSubmit(handleForm)}
        >
          <h1 className="text-lg pb-4 font-bold">Recuperação de senha</h1>

          <p className="text-center text-gray1">
            Digite seu email cadastrado para que você receba nossa mensagem de
            redefinição de senha!
          </p>

          <div className="flex flex-col gap-4 pb-4">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              type="text"
              placeholder="Digite seu email"
              className="p-3 border-2 border-gray6 rounded outline-none"
            />
            {errors.email?.message && (
              <span className="text-alert1 font-semibold">
                {errors.email.message}
              </span>
            )}
          </div>

          <Button type="submit" variant="brand-1">
            Enviar
          </Button>

          <Link className="absolute top-8 right-8 flex items-center" href="/">
            <BsArrowLeftShort /> Voltar
          </Link>
        </form>
      </main>

      {openErrorModal && (
        <Modal setOpenModal={setOpenErrorModal}>
          <div className="bg-gray7">{errorMessage}</div>
        </Modal>
      )}

      {openSuccessModal && (
        <Modal setOpenModal={setOpenSuccessModal}>
          <div className="bg-gray7">{sucessMessage}</div>
        </Modal>
      )}
    </>
  );
};

export default Recover;
