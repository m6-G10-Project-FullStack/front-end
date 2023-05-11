import React, { useState } from "react";
import CustomImage from "../CustomImage/customImage";
import { iCarPhotos } from "../ModalAnuncio";
import { useAuth } from "../../contexts/authContext";

export interface iPhotosAsideProps {
  photos?: iCarPhotos[];
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPhoto: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

export const AsidePhotos = ({ setOpenModal, setPhoto }: iPhotosAsideProps) => {
  const { photos } = useAuth();
  const openPhoto = (photo: string) => {
    setOpenModal(true);
    setPhoto(photo);
  };

  return (
    <div className="bg-gray10 rounded-lg p-3 ">
      <h3 className="pt-9 pl-8 font-lex font-semibold text-xl">Fotos</h3>
      <section className="bg-gray10 rounded-s grid gap-1 grid-cols-3 grid-rows-2 md:pt-custom10 ">
        {photos?.map((photo, index) => (
          <div
            onClick={() => openPhoto(photo.photo_link)}
            className="flex justify-center items-center  h-custom90"
            key={index}
          >
            <CustomImage
              alt="foto do carro em miniatura"
              src={photo.photo_link}
              width={120}
              height={90}
              style={{ objectFit: "none", width: 250, height: 90 }}
            />
          </div>
        ))}
      </section>
    </div>
  );
};
