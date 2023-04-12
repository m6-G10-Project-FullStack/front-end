import Head from "next/head";
import { useState } from "react";

import Image from "../src/assets/car.png";
import { Button } from "../src/components/Button";
import { Footer } from "../src/components/Footer";
import { Banner, CarSection, Container, Pagination } from "./style";

export default function Home() {
  const [carList, setCarList] = useState([
    {
      id: 0,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      author: "Róger Aguiar",
    },
    {
      id: 1,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      author: "Róger Aguiar",
    },
    {
      id: 2,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      author: "Róger Aguiar",
    },
    {
      id: 3,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      author: "Róger Aguiar",
    },
    {
      id: 4,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      author: "Róger Aguiar",
    },
    {
      id: 5,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      author: "Róger Aguiar",
    },
    {
      id: 6,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      author: "Róger Aguiar",
    },
    {
      id: 7,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      author: "Róger Aguiar",
    },
    {
      id: 8,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      author: "Róger Aguiar",
    },
    {
      id: 9,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      author: "Róger Aguiar",
    },
    {
      id: 10,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      author: "Róger Aguiar",
    },
    {
      id: 11,
      name: "Fiat uno",
      img: Image,
      description: "Card de test",
      author: "Róger Aguiar",
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

      {/* <Header /> */}

      <main>
        <Banner image={Image}>
          <div>
            <h1>Motors Shop</h1>
            <p>A melhor plataforma de anúncios de carro do país</p>
          </div>
        </Banner>
        <Container>
          <Button
            size="big"
            variant="brand-2"
            clickFunction={() => console.log("oi")}
          >
            Filtros
          </Button>
          {/* <FilterList /> */}
          <CarSection>
            {carList.length ? (
              carList.map((car) => (
                <li key={car.id} className="card">
                  <p>{car.name}</p>
                </li>
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
