import CustomImage from "../CustomImage/customImage";
import imgX from "../../assets/x.png";
import Image from "next/image";

interface iModalPhotoProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  carImg: string;
}

export const ModalPhoto = ({ setOpenModal, carImg }: iModalPhotoProps) => {
  return (
    <div className="bg-gray10 w-full max-w-custom344 h-custom365 flex flex-col content-center rounded-lg md:max-w-lg">
      <div className="flex justify-between px-4 py-8 items-center">
        <h6 className="font-lex font-medium text-base">Imagem do veículo</h6>
        <button
          className="border-none cursor-pointer"
          onClick={() => setOpenModal(false)}
        >
          <Image src={imgX} alt="botão fechar" width={24} height={24} />
        </button>
      </div>
      <div className="flex w-full max-w-custom344 h-60 justify-center items-center md:max-w-full">
        <CustomImage
          src={carImg}
          alt="Imagem do veículo"
          domains={["th.bing.com"]}
          width={260}
          height={239}
        />
      </div>
    </div>
  );
};
