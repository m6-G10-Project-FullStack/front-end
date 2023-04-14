import React, { useState } from "react";
import * as styled from "./style";
import { Button } from "../Button";

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
        <styled.Section>
          <styled.mobileClose onClick={() => setIsOpen(false)} type="button">
            x
          </styled.mobileClose>
          <styled.Div>
            <h4>Marca</h4>
            {marca.length > 0 ? (
              <ul>
                {filtredMarcas.map((marca) => (
                  <li onClick={handleClickMarcas} key={marca}>
                    {marca}
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                {listaMarcas.map((marca) => (
                  <li onClick={handleClickMarcas} key={marca}>
                    {marca}
                  </li>
                ))}
              </ul>
            )}
          </styled.Div>
          <styled.Div>
            <h4>Modelo</h4>
            {modelo.length > 0 ? (
              <ul>
                {filtredModelos.map((modelo) => (
                  <li onClick={handleClickModelos} key={modelo}>
                    {modelo}
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                {listaModelos.map((modelo) => (
                  <li onClick={handleClickModelos} key={modelo}>
                    {modelo}
                  </li>
                ))}
              </ul>
            )}
          </styled.Div>
          <styled.Div>
            <h4>Cor</h4>
            {cor.length > 0 ? (
              <ul>
                {filtredCor.map((cor) => (
                  <li onClick={handleClickCor} key={cor}>
                    {cor}
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                {listaCores.map((cor) => (
                  <li onClick={handleClickCor} key={cor}>
                    {cor}
                  </li>
                ))}
              </ul>
            )}
          </styled.Div>
          <styled.Div>
            <h4>Ano</h4>
            {filtredAno.length > 0 ? (
              <ul>
                {filtredAno.map((ano) => (
                  <li onClick={handleClickAno} key={ano}>
                    {ano}
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                {listaAnos.map((ano) => (
                  <li onClick={handleClickAno} key={ano}>
                    {ano}
                  </li>
                ))}
              </ul>
            )}
          </styled.Div>
          <styled.Div>
            <h4>Combustível</h4>
            {filtredCombustivel.length > 0 ? (
              <ul>
                {filtredCombustivel.map((combustivel) => (
                  <li onClick={handleClickCombustivel} key={combustivel}>
                    {combustivel}
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                {listaCombustivel.map((combustivel) => (
                  <li onClick={handleClickCombustivel} key={combustivel}>
                    {combustivel}
                  </li>
                ))}
              </ul>
            )}
          </styled.Div>
          <styled.Div>
            <h4>Km</h4>
            <div className="div-inputs">
              <input
                type="text"
                id="minKm"
                placeholder="Mínima"
                onKeyDown={handleKeyPress}
                onChange={handleMinKmInput}
              />
              <input
                type="text"
                id="maxKm"
                placeholder="Máxima"
                onKeyDown={handleKeyPress}
                onChange={handleMaxKmInput}
              />
            </div>
          </styled.Div>
          <styled.Div>
            <h4>Preço</h4>
            <div className="div-inputs">
              <input
                type="text"
                id="minPrice"
                placeholder="Mínima"
                onKeyDown={handleKeyPress}
                onChange={handleMinPriceInput}
              />
              <input
                type="text"
                id="maxPrice"
                placeholder="Máxima"
                onKeyDown={handleKeyPress}
                onChange={handleMaxPriceInput}
              />
            </div>
          </styled.Div>
          <styled.divButton>
            <Button
              clickFunction={() => console.log("cliquei")}
              size="big"
              variant="brand-2"
            >
              Ver anúncios
            </Button>
          </styled.divButton>
        </styled.Section>
      ) : (
        <Button
          variant="brand-1"
          size="big"
          clickFunction={() => setIsOpen(true)}
        >
          Filtros
        </Button>
      )}
    </>
  );
};
