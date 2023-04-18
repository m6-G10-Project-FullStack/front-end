import React from "react";
import CustomImage from "../CustomImage/customImage";

export interface iPhotosAsideProps {
  photos: string[];
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPhoto: React.Dispatch<React.SetStateAction<string>>;
}

export const AsidePhotos = ({
  photos,
  setOpenModal,
  setPhoto,
}: iPhotosAsideProps) => {
  const openPhoto = (photo: string) => {
    setPhoto(photo);
    setOpenModal(true);
  };

  return (
    <div className="bg-gray10 rounded-s p-3 md:w-full max-w-[351px] md:max-w-[440px]">
      <h3 className="pt-9 pl-8 font-lex font-semibold text-xl">Fotos</h3>
      <section className="bg-gray10 rounded-s grid gap-4 grid-cols-3 grid-rows-2 md:pt-custom10 md:w-full">
        {photos.map((photo, index) => (
          <div
            onClick={() => openPhoto(photo)}
            className="flex justify-center items-center w-custom90 h-custom90 bg-gray7"
            key={index}
          >
            <CustomImage
              alt="foto do carro em miniatura"
              src={photo}
              width={90}
              height={54}
            />
          </div>
        ))}
      </section>
    </div>
  );
};
