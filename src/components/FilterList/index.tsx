import React, { useState } from "react";
import * as styled from "./style";

interface iProps {
  listaMarcas: string[];
  listaModelos: string[];
  listaCores: string[];
  listaAnos: string[];
  listaCombustivel: string[];
}

export const List = ({
  listaMarcas,
  listaAnos,
  listaCores,
  listaModelos,
  listaCombustivel,
}: iProps) => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [ano, setAno] = useState("");
  const [combustivel, setCombustivel] = useState("");

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

  return (
    <>
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
    </>
  );
};
