import Head from "next/head";

import { FilterList } from "../src/components/FilterList";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";

import Car from "../src/assets/car.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CarCard } from "../src/components/CardCard/Carcard";
import api from "../src/services/api";
import { iCarResponse } from "../src/components/ModalAnuncio";
import { useAuth } from "../src/contexts/authContext";

export default function Home() {
  const { setIdSeller } = useAuth();
  const [carList, setCarList] = useState<iCarResponse[]>([]);
  const [page, setPage] = useState(0);

  const prevPage = () => {
    window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" });

    setPage(page - 1);
  };

  const nextPage = () => {
    window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" });

    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      await api.get(`/cars?page=${page}&limit=12`).then((res) => {
        setCarList(res.data);
      });
    };
    fetchData();
  }, [page]);

  return (
    <>
      <Head>
        <title>
          Compre e venda carros no Motors Shop - Anúncios de carros novos e
          usados
        </title>
        <meta
          name="description"
          content="Compre e venda carros novos e usados no Motors Shop. Anuncie gratuitamente seus veículos e encontre as melhores ofertas."
        />
        <meta
          name="keywords"
          content="Motors Shop, carros, anúncios, venda, compra, novos, usados"
        />
        <meta name="author" content="Motors Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <div className="mt-20">
        <main>
          <section
            className="relative flex justify-center items-center"
            style={{ height: "calc(100vh - 80px)" }}
          >
            <div className="absolute inset-0 h-full w-full md:max-h-[600xp] z-10 flex justify-center items-center bg-gradient-to-b from-gray2 to-gray0">
              <Image
                className="h-fit w-fit opacity-60 md:h-full"
                src={Car}
                alt="Car banner"
              />
            </div>
            <div className="z-10 flex flex-col items-center gap-4 text-center mb-40">
              <h1 className="text-5xl font-semibold text-gray10">
                Motors Shop
              </h1>
              <p className="text-semibold text-gray10 text-2xl">
                A melhor plataforma de anúncios de carro do país
              </p>
            </div>
          </section>

          <section className="w-full h-full">
            <div className="w-full h-full flex justify-around max-w-[1600px] my-0 mx-auto px-3 flex-col-reverse md:px-8 md:flex-row md:justify-center">
              <FilterList
                listaAnos={[]}
                listaCombustivel={[]}
                listaCores={[]}
                listaMarcas={[]}
                listaModelos={[]}
              />

              {carList?.length ? (
                <ul className="w-full flex mt-4 gap-4 overflow-y-scroll md:flex-wrap md:justify-between md:gap-0 md:overflow-y-hidden">
                  {carList.map((car: iCarResponse, i) => (
                    <CarCard
                      key={i}
                      carId={car.id}
                      carName={car.model}
                      carDescription={car.description}
                      carImg={car.coverImage}
                      carKm={car.km}
                      carPrice={car.price}
                      carSeller={car.userId}
                      carYear={car.year}
                      carSellerName={car.User.name}
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
            </div>
          </section>

          <div className="w-full flex items-center justify-center gap-6 mt-16 mb-8 md:mb-16">
            {page > 0 && (
              <button
                type="button"
                onClick={prevPage}
                className="text-brand2 font-semibold text-xl"
              >
                Anterior &#60;
              </button>
            )}
            <p className="text-xl text-gray4 font-semibold">
              <span className="text-gray3">{page + 1}</span> de 2
            </p>
            <button
              type="button"
              onClick={nextPage}
              className="text-brand2 font-semibold text-xl"
            >
              Seguinte &gt;
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
