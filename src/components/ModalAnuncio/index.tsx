import React, { useState } from "react";
import Select from "../Select";
import { Button } from "../Button";
import Input from "../Input";

interface iModalAnuncioProps {
  setOpenModalAnuncio: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const ModalAnuncio = ({ setOpenModalAnuncio, title }: iModalAnuncioProps) => {
  const arrayMarcas = ["Audi", "Bmw"];
  const arrayModelos = ["Audi SQ5", "Bmw M3"];
  const arrayAnos = ["2020", "2021"];
  const arrayCombustivel = ["Flex", "Elétrico"];
  const [inputCount, setInputCount] = useState([1, 2]);

  const handleInputCount = () => {
    if (inputCount.length < 6) {
      setInputCount([...inputCount, inputCount.length + 1]);
    }
  };

  return (
    <div className="bg-gray10 w-full h-max max-w-custom344 flex flex-col content-center rounded-lg px-6 py-4 md:max-w-lg relative overflow-y-auto scrollbar-w-6 scrollbar-track-gray-100 scrollbar-thumb-gray-500 scrollbar-thumb-rounded-md">
      <div className="flex w-full justify-between items-center">
        <p className="font-lex font-medium text-base text-gray1">{title}</p>
        <button
          className="flex border-none bg-transparent text-gray3 text-custom22 cursor-pointer"
          onClick={() => setOpenModalAnuncio(false)}
          type="button"
        >
          x
        </button>
      </div>
      <form className="flex flex-col w-full py-4 gap-2">
        <h3 className="font-inter font-medium text-sm leading-6 text-gray1 mb-6">
          Informações do veículo
        </h3>
        <Select label="Marca" arrayValue={arrayMarcas} />
        <Select label="Modelo" arrayValue={arrayModelos} />
        <div className="flex justify-between gap-4">
          <div className="flex flex-col w-[127px]">
            <Select label="Ano" arrayValue={arrayAnos} />
          </div>
          <div className="flex flex-col w-[127px]">
            <Select label="Combustível" arrayValue={arrayCombustivel} />
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col w-[127px]">
            <Input label="Quilometragem" placeholder={"Ex.: 30.000"} />
          </div>
          <div className="flex flex-col w-[127px]">
            <Input label="Cor" placeholder={"Ex.: Branco"} />
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col w-[127px]">
            <Input placeholder="R$ 48.000,00" label="Preço tabela FIPE" />
          </div>
          <div className="flex flex-col w-[127px]">
            <Input label="Preço" placeholder={"Ex.: 50.000,00"} />
          </div>
        </div>
        <Input
          label="Descrição"
          placeholder="Escreva detalhes do seu veículo"
        />
        <Input label="Imagem da capa" placeholder={"Ex.: https://image.com"} />
        {inputCount.map((item, i) => (
          <Input
            key={item}
            label={`${item}ª Imagem da galeria`}
            placeholder={"Ex.: https://image.com"}
          />
        ))}
        <div className="m-w-[315px]">
          <Button type="button" onClick={handleInputCount} variant="brand-4">
            Adicionar campo para imagem da galeria
          </Button>
        </div>
        <div>
          <Button variant="gray-6">Excluir anúncio</Button>
          <Button type="submit" variant="brand-4">
            Criar anúncio
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ModalAnuncio;
