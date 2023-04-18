import React, { useState } from "react";
import { Button } from "../Button";
// import { Button } from "../Button";

interface iProps {
  listaMarcas: string[];
  listaModelos: string[];
  listaCores: string[];
  listaAnos: string[];
  listaCombustivel: string[];
}

export const FilterList = ({
  listaMarcas,
  listaAnos,
  listaCores,
  listaModelos,
  listaCombustivel,
}: iProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [ano, setAno] = useState("");
  const [combustivel, setCombustivel] = useState("");
  const [minKm, setMinKm] = useState<number>(0.0);
  const [maxKm, setMaxKm] = useState<number>(100000.0);
  const [minPrice, setMinPrice] = useState<number>(0.0);
  const [maxPrice, setMaxPrice] = useState<number>(1000000.0);

  const handleClickMarcas = (event: React.MouseEvent<HTMLLIElement>) => {
    const valorClicado = (event.target as HTMLLIElement).innerText;
    setMarca(valorClicado);
  };

  const filtredMarcas =
    marca.length > 0 ? listaMarcas.filter((item) => item == marca) : [];

  const handleClickModelos = (event: React.MouseEvent<HTMLLIElement>) => {
    const valorClicado = (event.target as HTMLLIElement).innerText;
    setModelo(valorClicado);
  };

  const filtredModelos =
    modelo.length > 0 ? listaModelos.filter((item) => item == modelo) : [];

  const handleClickCor = (event: React.MouseEvent<HTMLLIElement>) => {
    const valorClicado = (event.target as HTMLLIElement).innerText;
    setCor(valorClicado);
  };

  const filtredCor =
    cor.length > 0 ? listaCores.filter((item) => item == cor) : [];

  const handleClickAno = (event: React.MouseEvent<HTMLLIElement>) => {
    const valorClicado = (event.target as HTMLLIElement).innerText;
    setAno(valorClicado);
  };

  const filtredAno =
    cor.length > 0 ? listaAnos.filter((item) => item == ano) : [];

  const handleClickCombustivel = (event: React.MouseEvent<HTMLLIElement>) => {
    const valorClicado = (event.target as HTMLLIElement).innerText;
    setCombustivel(valorClicado);
  };

  const filtredCombustivel =
    cor.length > 0
      ? listaCombustivel.filter((item) => item == combustivel)
      : [];

  const handleMinKmInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinKm = parseFloat(event.target.value);
    setMinKm(newMinKm);
  };

  const handleMaxKmInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxKm = parseFloat(event.target.value);
    setMaxKm(newMaxKm);
  };

  const handleMinPriceInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = parseFloat(event.target.value);
    setMinPrice(newMinPrice);
  };

  const handleMaxPriceInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = parseFloat(event.target.value);
    setMaxPrice(newMaxPrice);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.key ? event.key.charCodeAt(0) : event.key;

    if (
      (charCode as number) > 31 &&
      ((charCode as number) < 48 || (charCode as number) > 57) &&
      (charCode as number) !== 66
    ) {
      event.preventDefault();
    }
  };

  return (
    <>
      {isOpen ? (
        <section className="w-full flex-1 flex-col items-center relative gap-2 md:w-calc-30-64">
          <button
            className="absolute top-0 right-0 border-none bg-transparent text-gray3 text-custom22 md:hidden"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            x
          </button>
          <div className="flex-1 flex-col justify-between content-start w-full max-w-custom375 md:max-w-custom454">
            <h4 className="mt-8 text-random4">Marca</h4>
            {marca.length > 0 ? (
              <ul className="pl-custom10 pt-4">
                {filtredMarcas.map((marca) => (
                  <li
                    className=" text-red-500 cursor-pointer"
                    onClick={handleClickMarcas}
                    key={marca}
                  >
                    {marca}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="pl-custom10 pt-4">
                {listaMarcas.map((marca) => (
                  <li
                    className=" text-gray3 cursor-pointer"
                    onClick={handleClickMarcas}
                    key={marca}
                  >
                    {marca}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex-1 flex-col justify-between content-start w-full max-w-custom375 md:max-w-custom454">
            <h4 className=" mt-8 text-black">Modelo</h4>
            {modelo.length > 0 ? (
              <ul className="pl-custom10 pt-4">
                {filtredModelos.map((modelo) => (
                  <li
                    className=" text-gray3 cursor-pointer"
                    onClick={handleClickModelos}
                    key={modelo}
                  >
                    {modelo}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="pl-custom10 pt-4">
                {listaModelos.map((modelo) => (
                  <li
                    className=" text-gray3 cursor-pointer"
                    onClick={handleClickModelos}
                    key={modelo}
                  >
                    {modelo}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex-1 flex-col justify-between content-start w-full max-w-custom375 md:max-w-custom454">
            <h4 className=" mt-8 text-black">Cor</h4>
            {cor.length > 0 ? (
              <ul className="pl-custom10 pt-4">
                {filtredCor.map((cor) => (
                  <li
                    className=" text-gray3 cursor-pointer"
                    onClick={handleClickCor}
                    key={cor}
                  >
                    {cor}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="pl-custom10 pt-4">
                {listaCores.map((cor) => (
                  <li
                    className=" text-gray3 cursor-pointer"
                    onClick={handleClickCor}
                    key={cor}
                  >
                    {cor}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex-1 flex-col justify-between content-start w-full max-w-custom375 md:max-w-custom454">
            <h4 className=" mt-8 text-black">Ano</h4>
            {filtredAno.length > 0 ? (
              <ul className="pl-custom10 pt-4">
                {filtredAno.map((ano) => (
                  <li
                    className=" text-gray3 cursor-pointer"
                    onClick={handleClickAno}
                    key={ano}
                  >
                    {ano}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="pl-custom10 pt-4">
                {listaAnos.map((ano) => (
                  <li
                    className=" text-gray3 cursor-pointer"
                    onClick={handleClickAno}
                    key={ano}
                  >
                    {ano}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex-1 flex-col justify-between content-start w-full max-w-custom375 md:max-w-custom454">
            <h4 className=" mt-8 text-black">Combustível</h4>
            {filtredCombustivel.length > 0 ? (
              <ul className="pl-custom10 pt-4">
                {filtredCombustivel.map((combustivel) => (
                  <li
                    className=" text-gray3 cursor-pointer"
                    onClick={handleClickCombustivel}
                    key={combustivel}
                  >
                    {combustivel}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="pl-custom10 pt-4">
                {listaCombustivel.map((combustivel) => (
                  <li
                    className=" text-gray3 cursor-pointer"
                    onClick={handleClickCombustivel}
                    key={combustivel}
                  >
                    {combustivel}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-col justify-between content-start w-full max-w-custom375 md:max-w-custom454">
            <h4 className=" mt-8 text-black">Km</h4>
            <div className="flex gap-6 md:gap-8">
              <input
                className="mt-6 w-32 h-9 bg-gray5 py-0 px-4 md:w-36  placeholder:text-gray3 placeholder:heading-76"
                type="text"
                id="minKm"
                placeholder="Mínima"
                onKeyDown={handleKeyPress}
                onChange={handleMinKmInput}
              />
              <input
                className="mt-6 w-32 h-9 bg-gray5 py-0 px-4 md:w-36  placeholder:text-gray3 placeholder:heading-76"
                type="text"
                id="maxKm"
                placeholder="Máxima"
                onKeyDown={handleKeyPress}
                onChange={handleMaxKmInput}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between content-start w-full max-w-custom375 md:max-w-custom454">
            <h4 className=" mt-10 text-black">Preço</h4>
            <div className="flex gap-6 md:gap-8">
              <input
                className="mt-6 w-32 h-9 bg-gray5 py-0 px-4 md:w-36 placeholder:text-gray3 placeholder:heading-76"
                type="text"
                id="minPrice"
                placeholder="Mínima"
                onKeyDown={handleKeyPress}
                onChange={handleMinPriceInput}
              />
              <input
                className="mt-6 w-32 h-9 bg-gray5 py-0 px-4 md:w-36  placeholder:text-gray3 placeholder:heading-76"
                type="text"
                id="maxPrice"
                placeholder="Máxima"
                onKeyDown={handleKeyPress}
                onChange={handleMaxPriceInput}
              />
            </div>
          </div>
          <div className="w-full max-w-custom375 mt-10 flex items-center justify-center md:max-w-custom454">
            <Button variant="brand-2">Ver anúncios</Button>
          </div>
        </section>
      ) : (
        <Button variant="brand-1">Filtros</Button>
      )}
    </>
  );
};
