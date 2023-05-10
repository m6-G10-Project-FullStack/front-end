import Head from "next/head";
import { useRouter } from "next/router";
import { VscLoading } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
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
  const [loading, setLoading] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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
    setLoading(true);
    await api
      .post("/users/resetPassword", data)
      .then(() => {
        setOpenSuccessModal(true);
        setSuccessMessage(
          "Um email de confirmação foi enviado para o seu endereço, entre no link para prosseguir com o processo de troca de senha!"
        );
      })
      .catch((err) => {
        console.error(err);

        setOpenErrorModal(true);
        setErrorMessage(
          "Não foi possível encontrar o seu email, verifique se o endereço está correto e tente novamente!"
        );
      })
      .finally(() => {
        setLoading(false);
        reset();
      });
  };

  const closeSuccessModal = () => {
    setOpenSuccessModal(false);
    router.push("/");
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

          {!loading ? (
            <Button type="submit" variant="brand-1">
              Enviar
            </Button>
          ) : (
            <button
              disabled
              className="button disabled flex items-start justify-center gap-2"
            >
              <>
                <VscLoading className="animate-spin text-xl" /> Enviando...
              </>
            </button>
          )}
        </form>
      </main>

      {openErrorModal && (
        <Modal setOpenModal={setOpenErrorModal}>
          <div className="bg-gray7 h-fit p-4 rounded relative">
            <h2 className="text-3xl font-semibold text-gray1">
              Ops, algo deu errado!
            </h2>
            <div className="flex flex-col mt-4 justify-between h-[164px]">
              <p className="text-gray2">{errorMessage}</p>

              <button
                className="button gray-6 self-end"
                onClick={() => setOpenErrorModal(false)}
              >
                Voltar
              </button>
            </div>

            <button
              type="button"
              onClick={() => setOpenErrorModal(false)}
              className="absolute top-4 right-4 text-xl text-gray-2"
            >
              <IoClose />
            </button>
          </div>
        </Modal>
      )}

      {openSuccessModal && (
        <Modal setOpenModal={setOpenSuccessModal}>
          <div className="bg-gray7 h-fit p-4 rounded relative">
            <h2 className="text-3xl font-semibold text-gray1">Sucesso!</h2>
            <div className="flex flex-col mt-4 justify-between h-[164px]">
              <p className="text-gray2">{successMessage}</p>

              <button
                className="button gray-6 self-end"
                onClick={closeSuccessModal}
              >
                Voltar
              </button>
            </div>

            <button
              type="button"
              onClick={closeSuccessModal}
              className="absolute top-4 right-4 text-xl text-gray-2"
            >
              <IoClose />
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Recover;
