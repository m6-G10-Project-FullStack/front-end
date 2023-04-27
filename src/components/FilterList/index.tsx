import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../Button";
import { iCarResponse } from "../ModalAnuncio";

interface iProps {
  list: iCarResponse[];
  setList: Dispatch<SetStateAction<iCarResponse[]>>;
  listaMarcas: string[];
  listaModelos: string[];
  listaCores: string[];
  listaAnos: string[];
  listaCombustivel: string[];
}

export const FilterList = ({
  list,
  setList,
  listaMarcas,
  listaAnos,
  listaCores,
  listaModelos,
  listaCombustivel,
}: iProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [minKm, setMinKm] = useState(0);
  const [maxKm, setMaxKm] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const clearFilters = () => {
    setBrand("");
    setModel("");
    setColor("");
    setYear("");
    setFuel("");
    setMinKm(0);
    setMaxKm(0);
    setMinPrice(0);
    setMaxPrice(0);

    setList(list);
  };

  const handleFilter = () => {
    let filteredCars = list;

    if (brand) {
      filteredCars = filteredCars.filter((car) => car.Brand.name === brand);
    }

    if (model) {
      filteredCars = filteredCars.filter((car) => car.model === model);
    }

    if (color) {
      filteredCars = filteredCars.filter((car) => car.color === color);
    }

    if (year) {
      filteredCars = filteredCars.filter((car) => car.year === +year);
    }

    if (fuel) {
      filteredCars = filteredCars.filter((car) => car.fuel === fuel);
    }

    if (minKm) {
      filteredCars = filteredCars.filter((car) => car.km >= minKm);
    }

    if (maxKm) {
      filteredCars = filteredCars.filter((car) => car.km <= maxKm);
    }

    if (minPrice) {
      filteredCars = filteredCars.filter((car) => car.price >= minPrice);
    }

    if (maxPrice) {
      filteredCars = filteredCars.filter((car) => car.price <= maxPrice);
    }

    setList(filteredCars);
  };

  return (
    <>
      {isOpen ? (
        <section className="w-full flex flex-col p-[6px] items-center gap-2 md:w-fit ">
          <div className="flex w-full justify-between items-center md:hidden max-w-custom375">
            <p className="font-lex font-medium text-base text-gray1">filtros</p>
            <button
              className="flex border-none bg-transparent text-gray3 text-custom22 cursor-pointer md:hidden"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              x
            </button>
          </div>
          <div className="flex flex-col justify-between content-start w-full max-w-custom375 md:max-w-custom454">
            <h4 className="font-lex font-semibold text-custom28 leading-9 mt-8  text-gray0">
              Marca
            </h4>

            <ul className="pl-custom10 pt-4">
              {brand !== "" ? (
                <li className="font-lex font-medium text-xl text-gray3 cursor-pointer">
                  {brand}
                </li>
              ) : (
                listaMarcas.map((marca, i) => (
                  <li
                    className="font-lex font-medium text-xl text-gray3 cursor-pointer"
                    onClick={() => setBrand(marca)}
                    key={i}
                  >
                    {marca}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="flex flex-col justify-between content-start w-full max-w-custom375 md:max-w-custom454">
            <h4 className=" font-lex font-semibold text-custom28 leading-9 mt-8 text-gray0">
              Modelo
            </h4>

            <ul className="pl-custom10 pt-4">
              {model !== "" ? (
                <li className="font-lex font-medium text-xl text-gray3 cursor-pointer">
                  {model}
                </li>
              ) : (
                listaModelos.map((modelo, i) => (
                  <li
                    className="font-lex font-medium text-xl text-gray3 cursor-pointer"
                    onClick={() => setModel(modelo)}
                    key={i}
                  >
                    {modelo}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="flex flex-col justify-between content-start w-full max-w-custom375 md:max-w-custom454">
            <h4 className=" font-lex font-semibold text-custom28 leading-9 mt-8 text-gray0">
              Cor
            </h4>
            <ul className="pl-custom10 pt-4">
              {color !== "" ? (
                <li className="font-lex font-medium text-xl text-gray3 cursor-pointer">
                  {color}
                </li>
              ) : (
                listaCores.map((cor) => (
                  <li
                    className="font-lex font-medium text-xl text-gray3 cursor-pointer"
                    onClick={() => setColor(cor)}
                    key={cor}
                  >
                    {cor}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="flex flex-col justify-between content-start w-full max-w-custom375 md:max-w-custom454">
            <h4 className=" font-lex font-semibold text-custom28 leading-9 mt-8 text-gray0">
              Ano
            </h4>
            <ul className="pl-custom10 pt-4">
              {year !== "" ? (
                <li className="font-lex font-medium text-xl text-gray3 cursor-pointer">
                  {year}
                </li>
              ) : (
                listaAnos.map((ano, i) => (
                  <li
                    className="font-lex font-medium text-xl text-gray3 cursor-pointer"
                    onClick={() => setYear(ano)}
                    key={i}
                  >
                    {ano}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="flex flex-col justify-between content-start w-full max-w-custom375 md:max-w-custom454">
            <h4 className=" font-lex font-semibold text-custom28 leading-9 mt-8 text-gray0">
              Combustível
            </h4>
            <ul className="pl-custom10 pt-4">
              {fuel !== "" ? (
                <li className="font-lex font-medium text-xl text-gray3 cursor-pointer">
                  {fuel}
                </li>
              ) : (
                listaCombustivel.map((combustivel, i) => (
                  <li
                    className="font-lex font-medium text-xl text-gray3 cursor-pointer"
                    onClick={() => setFuel(combustivel)}
                    key={i}
                  >
                    {combustivel}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="flex flex-col justify-between content-start w-full max-w-custom375 md:max-w-custom454">
            <h4 className=" font-lex font-semibold text-custom28 leading-9 mt-8 text-gray0">
              Km
            </h4>
            <div className="flex gap-6 md:gap-8">
              <input
                className="mt-6 w-32 h-9 bg-gray5 py-0 px-4 md:w-36 outline-none  placeholder:text-gray3 placeholder:heading-76"
                onChange={(e) => setMinKm(+e.target.value)}
                type="text"
                placeholder="Mínima"
              />
              <input
                className="mt-6 w-32 h-9 bg-gray5 py-0 px-4 md:w-36 outline-none  placeholder:text-gray3 placeholder:heading-76"
                onChange={(e) => setMaxKm(+e.target.value)}
                type="text"
                placeholder="Máxima"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between content-start w-full max-w-custom375 md:max-w-custom454">
            <h4 className=" font-lex font-semibold text-custom28 leading-9 mt-8 text-gray0">
              Preço
            </h4>
            <div className="flex gap-6 md:gap-8">
              <input
                className="mt-6 w-32 h-9 bg-gray5 py-0 px-4 md:w-36 outline-none placeholder:text-gray3 placeholder:heading-76"
                onChange={(e) => setMinPrice(+e.target.value)}
                type="text"
                placeholder="Mínima"
              />
              <input
                className="mt-6 w-32 h-9 bg-gray5 py-0 px-4 md:w-36 outline-none placeholder:text-gray3 placeholder:heading-76"
                onChange={(e) => setMinPrice(+e.target.value)}
                type="text"
                placeholder="Máxima"
              />
            </div>
          </div>
          <div className="w-full max-w-custom375 mt-10 flex flex-col gap-4 items-center justify-center md:max-w-custom454">
            {(brand !== "" ||
              model !== "" ||
              color !== "" ||
              year !== "" ||
              fuel !== "" ||
              minKm !== 0 ||
              maxKm !== 0 ||
              minPrice !== 0 ||
              maxPrice !== 0) && (
              <Button onClick={clearFilters} variant="brand-1">
                Limpar filtros
              </Button>
            )}
            <Button onClick={handleFilter} variant="brand-2">
              Ver anúncios
            </Button>
          </div>
        </section>
      ) : (
        <Button onClick={() => setIsOpen(true)} variant="brand-1">
          Filtros
        </Button>
      )}
    </>
  );
};
