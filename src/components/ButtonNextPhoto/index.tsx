import { useAuth } from "../../contexts/authContext";
import { Button } from "../Button";
import { GrLinkNext } from "react-icons/gr";
import { useState } from "react";

export const ButtonNextPhoto = () => {
  const { photos, setImagemAtual } = useAuth();
  const [indiceImagem, setIndiceImagem] = useState(0);
  setImagemAtual(photos[indiceImagem]);
  const NextImage = async () => {
    const nextImage = (indiceImagem + 1) % photos.length;
    setIndiceImagem(nextImage);
  };

  const backImage = async () => {
    const nextImage = (indiceImagem + 1) % photos.length;
    setIndiceImagem(nextImage);
  };

  return (
    <>
      <GrLinkNext
        size={20}
        color="#ffff"
        className="absolute bg-brand4 cursor-pointer hover:#whitte right-3 text-success3 bottom-[-50px]"
        onClick={NextImage}
      />
      <GrLinkNext
        size={20}
        className="absolute bg-brand4 cursor-pointer left-3 rotate-180 text-success3 bottom-[-50px]"
        onClick={backImage}
      />
    </>
  );
};
