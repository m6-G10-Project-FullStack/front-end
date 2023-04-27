import imgX from "../../assets/x.png";
import Image from "next/image";
import { Button } from "../Button";
import { useRouter } from "next/router";

interface iModalSuccessProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalSuccessCarRegister = ({
  setOpenModal,
}: iModalSuccessProps) => {
  const router = useRouter();
  const goToLoginPage = () => {
    router.push("/login");
  };
  return (
    <div className="bg-gray10 w-full max-w-custom344 h-[287px] flex flex-col content-center px-6 py-5 rounded-lg md:max-w-lg">
      <div className="flex justify-between items-center mb-8">
        <h6 className="font-lex font-medium text-base leading-5 text-gray1">
          Sucesso!
        </h6>
        <button
          className="flex border-none bg-transparent text-gray3 text-custom22 cursor-pointer"
          onClick={() => setOpenModal(false)}
        >
          <Image src={imgX} alt="botão fechar" width={12} height={12} />
        </button>
      </div>
      <h6 className="font-lex font-medium text-base leading-5 text-gray1 mb-5">
        Seu anúncio foi criado com sucesso!
      </h6>
      <p className="font-inter font-normal text-base leading-7 text-gray2 mb-5">
        Agora você poderá ver seus negócios crescendo em grande escala
      </p>
    </div>
  );
};
