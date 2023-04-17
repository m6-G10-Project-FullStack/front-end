import React from "react";
import CustomImage from "../CustomImage/customImage";

export interface iPhotosAsideProps {
  photos: string[];
}

export const AsidePhotos = ({ photos }: iPhotosAsideProps) => {
  return (
    <div className="bg-gray10 rounded-s p-3 md:w-full">
      <h3 className="pt-9 pl-8 heading-66">Fotos</h3>
      <section className="bg-gray10 rounded-s grid gap-4 grid-cols-3 grid-rows-2 md:pt-custom10 md:w-full">
        {photos.map((photo, index) => (
          <div
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
