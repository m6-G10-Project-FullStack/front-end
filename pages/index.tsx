import { List } from "../src/components/FilterList";

export default function Home() {
  const listaAnos = ["2021", "2022"];
  const listaCombustivel = ["flex", "elétrico"];
  const listaCores = ["branco", "prata"];
  const listaMarcas = ["audi", "renault"];
  const listaModelos = ["RSQ5", "sandero"];
  return (
    <>
      <List
        listaAnos={listaAnos}
        listaCombustivel={listaCombustivel}
        listaCores={listaCores}
        listaMarcas={listaMarcas}
        listaModelos={listaModelos}
      />
    </>
  );
}
