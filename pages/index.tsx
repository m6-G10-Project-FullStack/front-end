import Head from "next/head";
import { useState } from "react";

import Image from "../src/assets/car.png";
import { Button } from "../src/components/Button";
import { Footer } from "../src/components/Footer";
import { Banner, CarSection, Container, Pagination } from "./style";

import { CarCard } from "../src/components/CarCard";
import { Header } from "../src/components/Header";
import { FilterList } from "../src/components/FilterList";

export default function Home() {
  const [carList, setCarList] = useState([
    {
      id: 0,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      seller: "Róger Aguiar",
      km: 1,
      year: 2019,
      price: 10000,
    },
    {
      id: 0,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      seller: "Róger Aguiar",
      km: 1,
      year: 2019,
      price: 10000,
    },
    {
      id: 0,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      seller: "Róger Aguiar",
      km: 1,
      year: 2019,
      price: 10000,
    },
    {
      id: 0,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      seller: "Róger Aguiar",
      km: 1,
      year: 2019,
      price: 10000,
    },
    {
      id: 0,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      seller: "Róger Aguiar",
      km: 1,
      year: 2019,
      price: 10000,
    },
    {
      id: 0,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      seller: "Róger Aguiar",
      km: 1,
      year: 2019,
      price: 10000,
    },
    {
      id: 0,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      seller: "Róger Aguiar",
      km: 1,
      year: 2019,
      price: 10000,
    },
    {
      id: 0,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      seller: "Róger Aguiar",
      km: 1,
      year: 2019,
      price: 10000,
    },
    {
      id: 0,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      seller: "Róger Aguiar",
      km: 1,
      year: 2019,
      price: 10000,
    },
    {
      id: 0,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      seller: "Róger Aguiar",
      km: 1,
      year: 2019,
      price: 10000,
    },
    {
      id: 0,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      seller: "Róger Aguiar",
      km: 1,
      year: 2019,
      price: 10000,
    },
    {
      id: 0,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      seller: "Róger Aguiar",
      km: 1,
      year: 2019,
      price: 10000,
    },
    {
      id: 0,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      seller: "Róger Aguiar",
      km: 1,
      year: 2019,
      price: 10000,
    },
  ]);

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

      <Header
        isLoggedIn={false}
        user={{ initials: "RA", name: "Róger Aguiar" }}
      />

      <main>
        <Banner image={Image}>
          <div>
            <h1>Motors Shop</h1>
            <p>A melhor plataforma de anúncios de carro do país</p>
          </div>
        </Banner>
        <Container>
          <FilterList
            listaAnos={[]}
            listaCombustivel={[]}
            listaCores={[]}
            listaMarcas={[]}
            listaModelos={[]}
          />
          <CarSection>
            {carList.length ? (
              carList.map((car, i) => (
                <CarCard
                  carName={car.name}
                  carImg={car.img}
                  carDescription={car.description}
                  carSeller={car.seller}
                  carKm={car.km}
                  carYear={car.year}
                  carPrice={car.price}
                  key={i}
                />
              ))
            ) : (
              <li className="advice">Não existem anúncios no momento!</li>
            )}
          </CarSection>
        </Container>
      </main>
      <Pagination>
        <p>
          <span>1</span> de X
        </p>
        <button>Seguinte &gt;</button>
      </Pagination>

      <Footer />
    </>
  );
}
