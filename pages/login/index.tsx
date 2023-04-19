import React from "react";
import { CarCard } from "../../src/components/CardCard/Carcard";

const Login = () => {
  const car = {
    carDescription: "teste",
    carImg:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202302/20230227/porsche-taycan-turbo-s-eletrico-wmimagem17570311526.jpg?s=fill&w=1920&h=1440&q=75",
    carKm: 200,
    carName: "Tesla",
    carPrice: 50000,
    carSeller: "roberto Jr",
    carYear: 2020,
  };

  return (
    <div>
      <CarCard
        carDescription={car.carDescription}
        carImg={car.carImg}
        carKm={car.carKm}
        carName={car.carName}
        carPrice={car.carPrice}
        carSeller={car.carSeller}
        carYear={car.carYear}
      />
    </div>
  );
};

export default Login;
