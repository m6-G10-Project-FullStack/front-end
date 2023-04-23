import React, { useEffect, useState } from "react";
import { Button } from "../../src/components/Button";
import { Modal } from "../../src/components/ModalWrapper";
import ModalAnuncio from "../../src/components/ModalAnuncio";
import apiKenzie from "../../src/services/apiKenzie";
import { Console } from "console";

const Test = () => {
  const [openAnuncio, setOpenModalAnuncio] = useState(false);
  const [title, setTitle] = useState("");
  const [brands, setBrands] = useState<string[]>([""]);
  const [selectBrand, setSelectBrand] = useState("");
  const [cars, setCars] = useState<string[]>([""]);
  const [selectCar, setSelectCar] = useState("");
  const [years, setYears] = useState<string[]>([""]);
  const [selectYear, setSelectYear] = useState("");
  const [fuels, setFuels] = useState<string[]>([""]);
  const [selectFuel, setSelectFuel] = useState("");
  const [fipe, setFipe] = useState<number>();

  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = async () => {
    try {
      const { data } = await apiKenzie.get("");
      const nameBrands = Object.keys(data);
      setBrands(nameBrands);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectBrand[0] != "") {
      getCars(selectBrand);
    }
  }, [selectBrand]);

  const getCars = async (selectBrand: string) => {
    try {
      const { data } = await apiKenzie.get(`?brand=${selectBrand}`);
      const nameCars = data.map((car: any) => car.name);
      setCars(nameCars);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getYearFuel = async () => {
      if (selectCar != "") {
        try {
          const { data } = await apiKenzie.get(`?brand=${selectBrand}`);
          const car = data.filter((car: any) => {
            return car.name == selectCar;
          });
          setYears([car[0].year]);
          setFuels([car[0].fuel]);
          setFipe(car[0].value);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getYearFuel();
  }, [selectCar, selectBrand]);

  return (
    <div className="h-screen overflow-scroll">
      <Button
        onClick={() => {
          setOpenModalAnuncio(true);
          setTitle("Criar anúncio");
        }}
        variant="border-gray-4"
      >
        Criar anúncio
      </Button>
      {openAnuncio && (
        <Modal setOpenModal={setOpenModalAnuncio}>
          <ModalAnuncio
            setOpenModalAnuncio={setOpenModalAnuncio}
            title={title}
            brands={brands}
            setSelectBrand={setSelectBrand}
            cars={cars}
            setSelectCar={setSelectCar}
            years={years}
            setSelectYear={setSelectYear}
            fuels={fuels}
            setSelectFuel={setSelectFuel}
            fipe={fipe}
          />
        </Modal>
      )}
    </div>
  );
};

export default Test;
