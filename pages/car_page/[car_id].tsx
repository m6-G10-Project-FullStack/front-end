import React from "react";
import { AsidePhotos } from "../../src/components/AsidePhotos";

const carid = () => {
  const photos = [
    "https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2022/10/31123549/BMW-Serie-3-2023-1.jpeg",
    "https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2022/10/31123549/BMW-Serie-3-2023-1.jpeg",
    "https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2022/10/31123549/BMW-Serie-3-2023-1.jpeg",
    "https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2022/10/31123549/BMW-Serie-3-2023-1.jpeg",
    "https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2022/10/31123549/BMW-Serie-3-2023-1.jpeg",
    "https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2022/10/31123549/BMW-Serie-3-2023-1.jpeg",
  ];
  return (
    <>
      <AsidePhotos photos={photos} />
    </>
  );
};

export default carid;
