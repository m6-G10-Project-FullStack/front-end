import CustomImage from "../CustomImage/customImage";
import { SlClose } from "react-icons/sl";
import { ButtonNextPhoto } from "../ButtonNextPhoto";
import { useAuth } from "../../contexts/authContext";

interface iModalPhotoProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  carImg: string;
}

export const ModalPhoto = ({ setOpenModal, carImg }: iModalPhotoProps) => {
  const { imageAtual } = useAuth();
  const { photo_link } = imageAtual;
  console.log(imageAtual.photo_link);
  return (
    <div className="bg-gray10  flex flex-col content-end rounded-lg ">
      <div className="flex justify-center content-center items-center">
        <button
          type="button"
          className="h-10 border-none cursor-pointer"
          onClick={() => setOpenModal(false)}
        >
          <SlClose size={20} color="" />
        </button>
      </div>
      <div className="flex w-full  justify-center items-center ">
        <CustomImage
          className="w-full"
          style={{
            objectFit: "none",
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            boxShadow: "inherit",
          }}
          src={imageAtual.photo_link}
          alt="Imagem do veículo"
          width={400}
          height={200}
        />
        <ButtonNextPhoto />
      </div>
    </div>
  );
};
