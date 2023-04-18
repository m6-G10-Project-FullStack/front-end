import React from "react";
import { FilterList } from "../../src/components/FilterList";

export default function Register() {
  return (
    <>
      <FilterList
        listaAnos={["2019", "2020"]}
        listaCombustivel={["Flex"]}
        listaCores={["preto", "branco"]}
        listaMarcas={["Audi", "Bmw"]}
        listaModelos={["m5", "sq5"]}
      />
    </>
  );
}
