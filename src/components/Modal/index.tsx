import CustomImage from "../CustomImage/customImage";
import * as styled from "./style";
import imgX from "../../assets/x.png";
import Image from "next/image";

interface iModalPhotoProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  carImg: string;
}

export const ModalPhoto = ({ setOpenModal, carImg }: iModalPhotoProps) => {
  return (
    <styled.Container>
      <div className="div_title">
        <h6>Imagem do veículo</h6>
        <button onClick={() => setOpenModal(false)}>
          <Image src={imgX} alt="botão fechar" width={24} height={24} />
        </button>
      </div>
      <styled.DivIMG>
        <CustomImage
          src={carImg}
          alt="Imagem do veículo"
          domains={["th.bing.com"]}
          width={260}
          height={239}
        />
      </styled.DivIMG>
    </styled.Container>
  );
};
