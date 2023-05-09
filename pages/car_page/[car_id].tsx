import React, { useEffect, useState } from "react";
import Image from "next/dist/client/image";
import car from "../../src/assets/car.png";
import { Button } from "../../src/components/Button";
import { CommentCard } from "../../src/components/CommentCard";
import CommentInput from "../../src/components/CommentInput";
import { AsidePhotos } from "../../src/components/AsidePhotos";
import AsideProfile from "../../src/components/AsideProfile";
import { Modal } from "../../src/components/Modal";
import { ModalPhoto } from "../../src/components/ModalPhoto";
import { useAuth } from "../../src/contexts/authContext";
import api from "../../src/services/api";
import { parseCookies } from "nookies";
import { iCarResponse } from "../../src/components/ModalAnuncio";
import { Header } from "../../src/components/Header";

const CardPage = () => {
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [photo, setPhoto] = useState("");
  const [car, setCar] = useState<iCarResponse>();

  const message = encodeURIComponent(
    `Olá ${car?.User.name}, vim por meio do Motors Shop para saber mais sobre o carro ${car?.model}. Você poderia me fornecer mais informações sobre o carro e talvez agendar uma visita para que eu possa vê-lo pessoalmente? Obrigado!`
  );

  useEffect(() => {
    const cookies = parseCookies();
    const getCarById = async (id: string) => {
      const cars = await api
        .get(`/cars/${id}`)
        .then((res) => setCar(res.data))
        .catch((err) => console.log(err));
      return cars;
    };
    getCarById(cookies["idCar"]);
  }, []);

  return (
    <>
      <Header />
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <ModalPhoto setOpenModal={setOpenModal} carImg={photo} />
        </Modal>
      )}
      <main className="my-0 mt-[40px] mx-auto  md:p-[20px]  flex flex-col md:min-w-[375px] xl:max-w-full xl:flex-row xl:items-start md:items-center content-start justify-center  box-border gap-[15px] bg-gradient-to-b from-brand1 from-30%  to-brand4 to-20%">
        <section className="flex flex-col gap-[10px] p-[10px] xl:p-[30px]  md:p-[15px] box-border w-full content-center md:flex-wrap md:m-[5px] xl:m-[10px]">
          <section className="box-border relative shadow-sm flex p-[60px] h-[355px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-center g-[32px] rounded">
            <Image
              src={car?.coverImage!}
              alt="Card"
              width={800}
              height={400}
              style={{ objectFit: "fill", height: 335 }}
            />
          </section>
          <section className=" shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start gap-8 rounded">
            <h1 className="text-base font-semibold font-lex text-gray0">
              {car?.model}
            </h1>
            <div className="xl:flex mx:flex-col text-center justify-center items-center mx:gap-8 md:gap-0 md:w-full md:justify-between text-base ">
              <div className="flex justify-between items-center content-center w-fit">
                <span className="bg-brand4 justify-center flex w-fit rounded-lg px-2 py-1 text-brand1 font-medium ">
                  {car?.year}
                </span>
                <span className="bg-brand4 font-medium rounded-lg ml-[15px] w-fit px-2 py-1 text-brand1 text-center whitespace-nowrap">
                  {car?.km.toLocaleString()} km
                </span>
              </div>
              <p className="font-semibold flex w-full">
                {car?.price.toLocaleString("pt-BR", {
                  currency: "BRL",
                  style: "currency",
                })}
              </p>
            </div>
            {user.name ? (
              <Button
                onClick={() =>
                  window.open(
                    `https://api.whatsapp.com/send?phone=+55${car?.User.phone}&text=${message}`
                  )
                }
                className={`xl:w-[20%] mt-3 w-[100px] min-w-[100px] bg-brand1 rounded-lg p-2 text-whitefixed hover:bg-brand4 hover:text-brand1 transition-colors duration-300`}
                variant="brand-1"
              >
                Comprar
              </Button>
            ) : (
              <Button variant="disabled" disabled>
                Comprar
              </Button>
            )}
          </section>
          <section className="shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start g-[32px] rounded-lg ">
            <h2 className="font-semibold text-base">Descrição</h2>
            <p className="text-justify">{car?.description}</p>
          </section>
          <div className="shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start g-[32px] rounded-lg">
            {car?.comments.length ? (
              car.comments.map((item, i) => (
                <CommentCard
                  key={i}
                  cor={item.User.color}
                  datetime={item.created_at}
                  name={item.User.name}
                  text={item.comment}
                />
              ))
            ) : (
              <p>Este anúncio não possui comentários</p>
            )}
          </div>
          <section className="shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start g-[32px] rounded-lg">
            <CommentInput />
          </section>
        </section>
        <aside className="flex content-center md:mt-[0px] md:mr-[0px] md:ml-[0px] xl:mt-[40px] xl:mr-[55px] xl:ml-[-20px] md:w-[752px] md:p-0  md:justify-start items-start p-[10px] flex-col  h-[100%] gap-[15px] ">
          <div className=" bg-whitefixed w-full flex rounded-lg flex-col items-start justify-start">
            <AsidePhotos
              setOpenModal={setOpenModal}
              setPhoto={setPhoto}
              photos={car?.photos}
            />
          </div>
          <div className=" bg-whitefixed w-full flex rounded-lg flex-col items-center justify-center">
            <AsideProfile
              name={car?.User?.name}
              color={car?.User?.color}
              description={car?.User?.description}
            />
          </div>
        </aside>
      </main>
    </>
  );
};

export default CardPage;
