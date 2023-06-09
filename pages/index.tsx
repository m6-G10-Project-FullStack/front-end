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

export default function Home() {
  const [absoluteList, setAbsoluteList] = useState<iCarResponse[]>([]);
  const [carList, setCarList] = useState<iCarResponse[]>([]);
  const [brandList, setBrandList] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [page, setPage] = useState(0);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [minKm, setMinKm] = useState(0);
  const [maxKm, setMaxKm] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

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
        setAbsoluteList(res.data);
        const models = res.data.map((car: iCarResponse) => car.model);

        setModelList(
          models.filter((item: string, index: number) => {
            return models.indexOf(item) === index;
          })
        );
      });

      await api.get(`/brands`).then((res) => {
        setBrandList(res.data.map(({ name }: any) => name));
      });
    };

    fetchData();
  }, [page]);

  const searchList = async () => {
    const newModel = model.replaceAll(" ", "%20");
    await api
      .get(
        `/cars?page=${page}&limit=12&brand=${brand}&model=${newModel}&color=${color.toLowerCase()}&year=${year}&fuel=${fuel}`
      )
      .then((res) => {
        console.log(res.data);
        setCarList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                list={absoluteList}
                setList={setCarList}
                listaMarcas={brandList}
                listaModelos={modelList}
                listaCores={[
                  "Preto",
                  "Branco",
                  "Prata",
                  "Vermelho",
                  "Azul",
                  "Colorido",
                ]}
                listaAnos={["2019", "2020", "2021", "2022"]}
                listaCombustivel={["Flex", "Elétrico", "Híbrido"]}
                brand={brand}
                setBrand={setBrand}
                model={model}
                setModel={setModel}
                color={color}
                setColor={setColor}
                year={year}
                setYear={setYear}
                fuel={fuel}
                setFuel={setFuel}
                minKm={minKm}
                setMinKm={setMinKm}
                maxKm={maxKm}
                setMaxKm={setMaxKm}
                minPrice={minPrice}
                setMinPrice={setMinKm}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                searchList={searchList}
              />

              {carList.length ? (
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
                      carIsPromo={car.is_promo}
                    />
                  ))}
                </ul>
              ) : absoluteList.length ? (
                <ul className="w-full flex mt-4 gap-4 overflow-y-scroll md:flex-wrap md:justify-between md:gap-0 md:overflow-y-hidden">
                  {absoluteList.map((car: iCarResponse, i) => (
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
                      carIsPromo={car.is_promo}
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
