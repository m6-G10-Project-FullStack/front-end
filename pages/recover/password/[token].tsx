import Head from "next/head";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { yupResolver } from "@hookform/resolvers/yup";
import { confirmPasswordSchema } from "../../../src/schemas/shemas";
import { useRouter } from "next/router";
import { Header } from "../../../src/components/Header";
import { Button } from "../../../src/components/Button";
import api from "../../../src/services/api";
import { useState } from "react";
import { Modal } from "../../../src/components/Modal";
import { VscLoading } from "react-icons/vsc";

interface iFormData {
  password: string;
  confirmPassword: string;
}

const RecoverPassword = () => {
  const [loading, setLoading] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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

  const { token } = router.query;

  const handleForm = async (data: iFormData) => {
    const passwordData = {
      password: data.password,
    };

    setLoading(true);

    await api
      .patch(`/users/resetPassword/${token}`, passwordData)
      .then(() => {
        setOpenSuccessModal(true);
        setSuccessMessage("Sua senha foi atualizada com sucesso!");
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
    router.push("/login");
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

          {!loading ? (
            <Button type="submit" variant="brand-1">
              Confirmar
            </Button>
          ) : (
            <button
              disabled
              className="button disabled flex items-start justify-center gap-2"
            >
              <>
                <VscLoading className="animate-spin text-xl" /> Confirmando...
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
            <h2 className="text-3xl font-semibold text-gray1">Prontinho!</h2>
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

export default RecoverPassword;
