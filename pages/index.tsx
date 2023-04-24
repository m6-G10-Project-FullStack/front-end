import Head from "next/head";

import { FilterList } from "../src/components/FilterList";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";

import Car from "../src/assets/car.png";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { CarCard } from "../src/components/CardCard/Carcard";
import api from "../src/services/api";

interface iCar {
  id: string;
  year: number;
  fuel: string;
  km: number;
  color: string;
  fipe: string;
  price: string;
  is_promo: boolean;
  description: string;
  is_active: boolean;
  model: string;
  coverImage: string;
  userId: string;
  brandId: number;
  Brand: {
    id: number;
    name: string;
  };
}

export default function Home() {
  const [carList, setCarList] = useState<iCar[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await api.get(`/cars?page=${page}`).then((res) => {
        setCarList([...res.data]);
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
                  {carList.map((car, i) => (
                    <CarCard
                      key={i}
                      carName={car.model}
                      carDescription={car.description}
                      carImg="https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/car-images/c40-bev-my23-responsive.jpg?h=600&iar=0"
                      carKm={car.km}
                      carPrice={car.price}
                      carSeller="Róger Aguiar"
                      carYear={car.year}
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
            {page < 0 && (
              <button
                type="button"
                onClick={() => setPage(page + 1)}
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
              onClick={() => setPage(page + 1)}
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

// export const getServerSideProps: GetServerSideProps<iHomeProps> = async () => {
//   const response = await api.get("/cars");

//   return {
//     props: {
//       carList: response.data,
//     },
//   };
// };
