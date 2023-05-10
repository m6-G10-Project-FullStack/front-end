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
              src={car?.coverImage}
              alt={car?.model}
              width={460}
              height={200}
              style={{ objectFit: "none", width: 720, height: 320, flex: 1 }}
            />
          </section>
          <section className=" shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start g-[32px] rounded">
            <div className="flex flex-col w-full">
              <h1 className="text-base font-semibold font-lex text-gray0">
                {car?.model}
              </h1>
              <div className="xl:flex  gap-3 text-center justify-between w-full  text-base ">
                <div className="flex space-evenly items-center content-center w-full ">
                  <span className="bg-brand4 h-[32px] justify-center flex  w-[150px] rounded-lg ml-[5px] p-[4px] text-brand1 font-bold ">
                    Ano:{car?.year}
                  </span>
                  <span className="bg-brand4 font-bold h-[32px] flex w-[150px] rounded-lg ml-[15px] ] p-[4px]  text-brand1">
                    KM:{car?.km.toLocaleString()}
                  </span>
                  <p className="font-semibold flex w-full justify-end">
                    R$ {car?.price.toLocaleString()},00
                  </p>
                </div>
              </div>
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
            <CommentCard
              cor={user.color}
              datetime="11/04/2023"
              name={user.name}
              initial={user.name?.toUpperCase().substring(0, 2)}
              key="1"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
          </div>
          <section className="shadow-sm flex p-[5px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start g-[32px] rounded-lg">
            <CommentInput
              initials={user.name?.toUpperCase().substring(0, 2)}
              name={user?.name}
              cor={user?.color}
            />
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
              name={user.name}
              cor={user.color}
              description={user.description}
              initials={user.name?.toUpperCase().substring(0, 2)}
            />
          </div>
        </aside>
      </main>
    </>
  );
};

export default CardPage;
