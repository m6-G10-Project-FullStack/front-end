import React, { useMemo, useState } from "react";
import { Button } from "../../src/components/Button";
import { Modal } from "../../src/components/ModalWrapper";
import ModalAnuncio from "../../src/components/ModalAnuncio";
import { Header } from "../../src/components/Header";
import { Footer } from "../../src/components/Footer";
import Head from "next/head";
import Car from "../../src/assets/car.png";
import { useAuth } from "../../src/contexts/authContext";
import { CarCard } from "../../src/components/CardCard/Carcard";

const Test = () => {
  const [openAnuncio, setOpenModalAnuncio] = useState(false);
  const [title, setTitle] = useState("");
  const [carList, setCarList] = useState([
    {
      id: 0,
      carName: "Fiat uno",
      carImg: Car,
      carDescription: "Card de test",
      carSeller: "Róger Aguiar",
      carKm: 1,
      carYear: 2019,
      carPrice: 10000,
    },
    {
      id: 0,
      carName: "Fiat uno",
      carImg: Car,
      carDescription: "Card de test",
      carSeller: "Róger Aguiar",
      carKm: 1,
      carYear: 2019,
      carPrice: 10000,
    },
    {
      id: 0,
      carName: "Fiat uno",
      carImg: Car,
      carDescription: "Card de test",
      carSeller: "Róger Aguiar",
      carKm: 1,
      carYear: 2019,
      carPrice: 10000,
    },
    {
      id: 0,
      carName: "Fiat uno",
      carImg: Car,
      carDescription: "Card de test",
      carSeller: "Róger Aguiar",
      carKm: 1,
      carYear: 2019,
      carPrice: 10000,
    },
    {
      id: 0,
      carName: "Fiat uno",
      carImg: Car,
      carDescription: "Card de test",
      carSeller: "Róger Aguiar",
      carKm: 1,
      carYear: 2019,
      carPrice: 10000,
    },
    {
      id: 0,
      carName: "Fiat uno",
      carImg: Car,
      carDescription: "Card de test",
      carSeller: "Róger Aguiar",
      carKm: 1,
      carYear: 2019,
      carPrice: 10000,
    },
    {
      id: 0,
      carName: "Fiat uno",
      carImg: Car,
      carDescription: "Card de test",
      carSeller: "Róger Aguiar",
      carKm: 1,
      carYear: 2019,
      carPrice: 10000,
    },
    {
      id: 0,
      carName: "Fiat uno",
      carImg: Car,
      carDescription: "Card de test",
      carSeller: "Róger Aguiar",
      carKm: 1,
      carYear: 2019,
      carPrice: 10000,
    },
    {
      id: 0,
      carName: "Fiat uno",
      carImg: Car,
      carDescription: "Card de test",
      carSeller: "Róger Aguiar",
      carKm: 1,
      carYear: 2019,
      carPrice: 10000,
    },
    {
      id: 0,
      carName: "Fiat uno",
      carImg: Car,
      carDescription: "Card de test",
      carSeller: "Róger Aguiar",
      carKm: 1,
      carYear: 2019,
      carPrice: 10000,
    },
    {
      id: 0,
      carName: "Fiat uno",
      carImg: Car,
      carDescription: "Card de test",
      carSeller: "Róger Aguiar",
      carKm: 1,
      carYear: 2019,
      carPrice: 10000,
    },
    {
      id: 0,
      carName: "Fiat uno",
      carImg: Car,
      carDescription: "Card de test",
      carSeller: "Róger Aguiar",
      carKm: 1,
      carYear: 2019,
      carPrice: 10000,
    },
    {
      id: 0,
      carName: "Fiat uno",
      carImg: Car,
      carDescription: "Card de test",
      carSeller: "Róger Aguiar",
      carKm: 1,
      carYear: 2019,
      carPrice: 10000,
    },
  ]);

  const { user } = useAuth();

  const randomColor = useMemo(() => Math.floor(Math.random() * 11 + 1), []);

  return (
    <>
      <Head>
        <title>
          Anúncios de Carros do Usuário {user.username} - Motors Shop
        </title>
        <meta
          name="description"
          content={`Confira todos os anúncios do usuário ${user.username} no Motors Shop. Encontre o carro dos seus sonhos!`}
        />
        <meta
          name="keywords"
          content="Motors Shop, carros, anúncios, venda, compra, novos, usados"
        />
        <meta name="author" content="Motors Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main className="w-full bg-gray8">
        <section className="w-full h-full">
          <div className="h-full p-4 relative z-10 w-full">
            <div className="bg-gray10 h-fit rounded w-full max-w-[1200px] mx-auto mt-6 px-7 py-9 md:mt-20">
              <div className="flex flex-col items-start gap-6 mb-9">
                <div
                  className={`bg-random${randomColor} w-24 h-24 rounded-full flex items-center justify-center`}
                >
                  <p className="text-whitefixed text-4xl pl-0.5">RA</p>
                </div>

                <h1 className="text-gray1 font-semibold text-lg">
                  {user.username}{" "}
                  {user.is_anouncer && (
                    <span className="text-sm pl-[8px] pt-[4px] pr-[8px] pb-[4px] text-brand1 bg-brand4">
                      Anunciante
                    </span>
                  )}
                </h1>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ratione quas reiciendis, distinctio porro, eius laudantium hic
                  ut magnam, unde voluptate atque obcaecati dolor nihil
                  consequuntur dolorum vitae ab soluta quia!
                </p>
              </div>

              <Button
                onClick={() => {
                  setOpenModalAnuncio(true);
                  setTitle("Criar anúncio");
                }}
                variant="border-brand-4"
              >
                Criar anúncio
              </Button>
              {openAnuncio && (
                <Modal setOpenModal={setOpenModalAnuncio}>
                  <ModalAnuncio
                    setOpenModalAnuncio={setOpenModalAnuncio}
                    title={title}
                  />
                </Modal>
              )}
            </div>
          </div>
          <div className="w-full h-[437px] absolute bg-brand1 z-0 top-0 left-0" />
        </section>

        <section className="w-full max-w-[1600px] my-o mx-auto p-4">
          {carList.length ? (
            <ul className="w-full flex mt-4 gap-4 overflow-y-scroll md:flex-wrap md:overflow-y-hidden md:mt-2">
              {carList.map((car, i) => (
                <CarCard
                  key={i}
                  carName={car.carName}
                  carDescription={car.carDescription}
                  carImg={car.carImg}
                  carKm={car.carKm}
                  carPrice={car.carPrice}
                  carSeller={car.carSeller}
                  carYear={car.carYear}
                />
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

        <div className="w-full flex items-center justify-center gap-6 mt-16 mb-8 md:mb-16">
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
