import React from "react";
import CustomImage from "../CustomImage/customImage";
import * as styled from "./style";

export interface iPhotosAsideProps {
  photos: string[];
}

export const AsidePhotos = ({ photos }: iPhotosAsideProps) => {
  return (
    <styled.Container>
      <h3>Fotos</h3>
      <section>
        {photos.map((photo, index) => (
          <div className="gray-div-car-photos" key={index}>
            <CustomImage
              alt="foto do carro em miniatura"
              src={photo}
              width={90}
              height={54}
            />
          </div>
        ))}
      </section>
    </styled.Container>
  );
};
