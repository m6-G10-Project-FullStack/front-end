import Head from "next/head";
import { FilterList } from "../src/components/FilterList";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
// import { useState } from "react";

import Car from "../src/assets/car.png";
import Image from "next/image";
// import { Button } from "../src/components/Button";
// import { Footer } from "../src/components/Footer";
// import { Banner, CarSection, Container, Pagination } from "./style";

// import { CarCard } from "../src/components/CarCard";
// import { Header } from "../src/components/Header";
// import { FilterList } from "../src/components/FilterList";
// import { Button } from "../src/components/Button";

export default function Home() {
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

      <div>
        <main>
          <section
            className="relative flex justify-center items-center"
            style={{ height: "calc(100vh - 80px)" }}
          >
            <div className="absolute inset-0 h-full w-full md:h-full z-10 flex justify-center items-center bg-gradient-to-b from-gray2 to-gray0">
              <Image
                className="h-fit w-fit md:h-full opacity-60"
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

          <section className="w-full">
            <div className="w-full flex justify-between max-w-[1600px] my-0 mx-auto px-3 md:px-8">
              <FilterList
                listaAnos={[]}
                listaCombustivel={[]}
                listaCores={[]}
                listaMarcas={[]}
                listaModelos={[]}
              />

              <ul>
                <li>Car Card</li>
                <li>Car Card</li>
                <li>Car Card</li>
              </ul>
            </div>
          </section>

          <div className="w-full flex items-center justify-center gap-6 my-4 md:my-16">
            <p className="text-xl text-gray4 font-semibold">
              <span className="text-gray3">1</span> de 2
            </p>
            <button className="text-brand2 font-semibold text-xl">
              Seguinte &gt;
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
//   const [carList, setCarList] = useState([
//     {
//       id: 0,
//       name: "Fiat uno",
//       img: Image,
//       description: "Card de test",
//       seller: "Róger Aguiar",
//       km: 1,
//       year: 2019,
//       price: 10000,
//     },
//     {
//       id: 0,
//       name: "Fiat uno",
//       img: Image,
//       description: "Card de test",
//       seller: "Róger Aguiar",
//       km: 1,
//       year: 2019,
//       price: 10000,
//     },
//     {
//       id: 0,
//       name: "Fiat uno",
//       img: Image,
//       description: "Card de test",
//       seller: "Róger Aguiar",
//       km: 1,
//       year: 2019,
//       price: 10000,
//     },
//     {
//       id: 0,
//       name: "Fiat uno",
//       img: Image,
//       description: "Card de test",
//       seller: "Róger Aguiar",
//       km: 1,
//       year: 2019,
//       price: 10000,
//     },
//     {
//       id: 0,
//       name: "Fiat uno",
//       img: Image,
//       description: "Card de test",
//       seller: "Róger Aguiar",
//       km: 1,
//       year: 2019,
//       price: 10000,
//     },
//     {
//       id: 0,
//       name: "Fiat uno",
//       img: Image,
//       description: "Card de test",
//       seller: "Róger Aguiar",
//       km: 1,
//       year: 2019,
//       price: 10000,
//     },
//     {
//       id: 0,
//       name: "Fiat uno",
//       img: Image,
//       description: "Card de test",
//       seller: "Róger Aguiar",
//       km: 1,
//       year: 2019,
//       price: 10000,
//     },
//     {
//       id: 0,
//       name: "Fiat uno",
//       img: Image,
//       description: "Card de test",
//       seller: "Róger Aguiar",
//       km: 1,
//       year: 2019,
//       price: 10000,
//     },
//     {
//       id: 0,
//       name: "Fiat uno",
//       img: Image,
//       description: "Card de test",
//       seller: "Róger Aguiar",
//       km: 1,
//       year: 2019,
//       price: 10000,
//     },
//     {
//       id: 0,
//       name: "Fiat uno",
//       img: Image,
//       description: "Card de test",
//       seller: "Róger Aguiar",
//       km: 1,
//       year: 2019,
//       price: 10000,
//     },
//     {
//       id: 0,
//       name: "Fiat uno",
//       img: Image,
//       description: "Card de test",
//       seller: "Róger Aguiar",
//       km: 1,
//       year: 2019,
//       price: 10000,
//     },
//     {
//       id: 0,
//       name: "Fiat uno",
//       img: Image,
//       description: "Card de test",
//       seller: "Róger Aguiar",
//       km: 1,
//       year: 2019,
//       price: 10000,
//     },
//     {
//       id: 0,
//       name: "Fiat uno",
//       img: Image,
//       description: "Card de test",
//       seller: "Róger Aguiar",
//       km: 1,
//       year: 2019,
//       price: 10000,
//     },
//   ]);

//   return (
//     <>

//       <Header
//         isLoggedIn={false}
//         user={{ initials: "RA", name: "Róger Aguiar" }}
//       />

//       <main>
//         <Banner image={Image}>
//           <div>
//             <h1>Motors Shop</h1>
//             <p>A melhor plataforma de anúncios de carro do país</p>
//           </div>
//         </Banner>
//         <Container>
//           <FilterList
//             listaAnos={[]}
//             listaCombustivel={[]}
//             listaCores={[]}
//             listaMarcas={[]}
//             listaModelos={[]}
//           />
//           <CarSection>
//             {carList.length ? (
//               carList.map((car, i) => (
//                 <CarCard
//                   carName={car.name}
//                   carImg={car.img}
//                   carDescription={car.description}
//                   carSeller={car.seller}
//                   carKm={car.km}
//                   carYear={car.year}
//                   carPrice={car.price}
//                   key={i}
//                 />
//               ))
//             ) : (
//               <li className="advice">Não existem anúncios no momento!</li>
//             )}
//           </CarSection>
//         </Container>
//       </main>
//       <Pagination>
//         <p>
//           <span>1</span> de X
//         </p>
//         <button>Seguinte &gt;</button>
//       </Pagination>

//       <Footer />
//     </>
//   );
// }
