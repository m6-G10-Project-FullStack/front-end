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

  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = async () => {
    try {
      const { data } = await apiKenzie.get("");
      const nameBrands = Object.keys(data).map((item) => item);
      setBrands(nameBrands);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectBrand.length > 0) {
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
    if (selectCar.length > 0) {
      getYears(selectCar);
    }
  }, [selectCar]);

  const getYears = async (selectCar: string) => {
    try {
      const { data } = await apiKenzie.get(`?brand=${selectBrand}`);
      const carsYears = data
        .filter((car: any) => car.name == selectCar)
        .map((car: any) => car.year);
      setYears(carsYears);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectYear[0] != "") {
      console.log(selectYear, selectCar);
      getFuels(selectYear, selectCar);
      console.log(fuels);
    }
  }, [selectYear, selectCar]);

  const getFuels = async (selectYear: string, selectCar: string) => {
    try {
      const { data } = await apiKenzie.get(`?brand=${selectBrand}`);
      const carsFuels = data
        .filter((car: any) => {
          return car.name == selectCar && car.year == selectYear;
        })
        .map((car: any) => car.fuel);
      console.log(carsFuels);
      setFuels(carsFuels);
    } catch (error) {
      console.log(error);
    }
  };

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
          />
        </Modal>
      )}
    </div>
  );
};

export default Test;
