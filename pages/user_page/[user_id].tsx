import React, { useEffect, useMemo, useState } from "react";
import { Button } from "../../src/components/Button";
import { Modal } from "../../src/components/Modal";
import ModalAnuncio, { iCarResponse } from "../../src/components/ModalAnuncio";
import { Header } from "../../src/components/Header";
import { Footer } from "../../src/components/Footer";
import Head from "next/head";
import Car from "../../src/assets/car.png";
import { useAuth } from "../../src/contexts/authContext";
import apiKenzie from "../../src/services/apiKenzie";
import api from "../../src/services/api";
import { iUser } from "../../src/@types";
import { parseCookies } from "nookies";
import { CarCardAnuncio } from "../../src/components/CarCardAnuncio/CarCardAnuncio";
import { ModalSuccess } from "../../src/components/ModalSuccess/ModalSuccess";
import { ModalSuccessCarRegister } from "../../src/components/ModalSuccessCarRegister/ModalSuccessCarRegister";

const Test = () => {
  const [openAnuncio, setOpenModalAnuncio] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [brands, setBrands] = useState<string[]>([""]);
  const [selectBrand, setSelectBrand] = useState("");
  const [cars, setCars] = useState<string[]>([""]);
  const [selectCar, setSelectCar] = useState("");
  const [years, setYears] = useState<string[]>([""]);
  const [selectYear, setSelectYear] = useState("");
  const [fuels, setFuels] = useState<string[]>([""]);
  const [selectFuel, setSelectFuel] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [fipe, setFipe] = useState<number>();
  const [carList, setCarList] = useState<iCarResponse[]>();
  const [seller, setSeller] = useState<iUser>();

  const randomColor = useMemo(() => Math.floor(Math.random() * 11 + 1), []);
  const { user, token } = useAuth();

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

  useEffect(() => {
    const cookies = parseCookies();
    const sellerId = cookies["idSeller"];
    getSellerCars(sellerId);
  }, [openAnuncio]);

  const getSellerCars = async (sellerId: string) => {
    const { data } = await api.get(`/users/${sellerId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setSeller(data);
    setCarList(data.cars);
  };

  return (
    <>
      <Head>
        <title>
          Anúncios de Carros do Usuário {seller?.name} - Motors Shop
        </title>
        <meta
          name="description"
          content={`Confira todos os anúncios do usuário ${seller?.name} no Motors Shop. Encontre o carro dos seus sonhos!`}
        />
        <meta
          name="keywords"
          content="Motors Shop, carros, anúncios, venda, compra, novos, usados"
        />
        <meta name="author" content="Motors Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      {openModalSuccess && (
        <Modal setOpenModal={setOpenModalSuccess}>
          <ModalSuccessCarRegister setOpenModal={setOpenModalSuccess} />
        </Modal>
      )}

      <main className="w-full h-full bg-gray8">
        <section className="w-full h-full">
          <div className="h-full p-4 relative z-10 w-full">
            <div className="bg-gray10 h-fit rounded w-full max-w-[1200px] mx-auto mt-56 px-7 py-9 md:mt-56">
              <div className="flex flex-col items-start gap-6 mb-9">
                <div
                  className={`bg-${seller?.color} w-24 h-24 rounded-full flex items-center justify-center`}
                >
                  <p className="text-whitefixed text-4xl pl-0.5">
                    {seller?.name?.toUpperCase().split("")[0]}
                    {seller?.name?.toUpperCase().split("")[1]}
                  </p>
                </div>

                <h1 className="text-gray1 font-semibold text-lg">
                  {seller?.name}
                  {seller?.is_seller && (
                    <span className="text-sm pl-[8px] pt-[4px] pr-[8px] pb-[4px] text-brand1 bg-brand4">
                      Anunciante
                    </span>
                  )}
                </h1>

                <p>{seller?.description}</p>
              </div>
              {user?.id == seller?.id ? (
                <Button
                  onClick={() => {
                    setOpenModalAnuncio(true);
                  }}
                  variant="border-brand-4"
                >
                  Criar anúncio
                </Button>
              ) : (
                <></>
              )}

              {openAnuncio && (
                <Modal setOpenModal={setOpenModalAnuncio}>
                  <ModalAnuncio
                    setOpenModalAnuncio={setOpenModalAnuncio}
                    setOpenModalSuccess={setOpenModalSuccess}
                    brands={brands}
                    setSelectBrand={setSelectBrand}
                    cars={cars}
                    setSelectCar={setSelectCar}
                    years={years}
                    setSelectYear={setSelectYear}
                    fuels={fuels}
                    setSelectFuel={setSelectFuel}
                    fipe={fipe}
                    setSelectColor={setSelectColor}
                  />
                </Modal>
              )}
            </div>
          </div>
          <div className="w-full h-[437px] absolute bg-brand1 z-0 top-0 left-0" />
        </section>
        {user?.id == seller?.id ? (
          <></>
        ) : (
          <h3 className="font-lex font-semibold text-2xl text-gray0 leading-8 w-full max-w-[1600px] my-0 mx-auto p-4">
            Anúncios
          </h3>
        )}
        <section className="w-full max-w-[1600px] my-0 mx-auto mt-[90px] p-4">
          {carList && carList!.length > 0 ? (
            <ul className="w-full flex mt-4 gap-12 overflow-y-scroll md:flex-wrap md:overflow-y-hidden md:mt-2">
              {carList!.map((car, i) => (
                <div key={i} className="flex flex-col">
                  <CarCardAnuncio
                    key={i}
                    carIsActive={car.is_active}
                    carName={car.model}
                    carDescription={car.description}
                    carImg={car.coverImage}
                    carKm={car.km}
                    carPrice={car.price}
                    carSeller={car.userId}
                    carYear={car.year}
                    carId={car.id}
                    seller={seller}
                  />
                </div>
              ))}
            </ul>
          ) : (
            <div className="h-full w-full flex justify-center mt-40">
              <p className="text-gray3 text-lg font-semibold md:text-xl">
                Ainda não possuímos anúncios...
              </p>
            </div>
          )}
        </section>

        <div className="w-full flex flex-col items-center justify-center gap-6 mt-[125px] mb-[65px] md:mb-16">
          <p className="text-xl text-gray4 font-semibold">
            <span className="text-gray3">1</span> de 2
          </p>
          <button className="text-brand2 font-semibold text-xl">
            Seguinte &gt;
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Test;
