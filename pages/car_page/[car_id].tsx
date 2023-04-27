import React, { useEffect, useState } from "react";
import Image from "next/dist/client/image";
import car from "../../src/assets/car.png";
import { Button } from "../../src/components/Button";
import { CommentCard } from "../../src/components/CommentCard";
import CommentInput from "../../src/components/CommentInput";
import { AsidePhotos } from "../../src/components/AsidePhotos";
import { photos } from "./dataFotos";
import AsideProfile from "../../src/components/AsideProfile";
import { Modal } from "../../src/components/ModalWrapper";
import { ModalPhoto } from "../../src/components/Modal";
import { useAuth } from "../../src/contexts/authContext";
import api from "../../src/services/api";
import { parseCookies } from "nookies";
import { iCarResponse } from "../../src/components/ModalAnuncio";
import { object } from "yup";
import { Header } from "../../src/components/Header";
const CardPage = () => {
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [photo, setPhoto] = useState("");
  const [car, setCar] = useState<iCarResponse>();
  console.log(car);

  useEffect(() => {
    const id = parseCookies();
    const getCarById = async (id: string) => {
      const cars = await api
        .get(`/cars/${id}`)
        .then((res) => setCar(res.data))
        .catch((err) => console.log(err));
      console.log(cars);
      return cars;
    };
    getCarById(id["idCar"]);
  }, []);

  return (
    <>
      <Header />
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <ModalPhoto setOpenModal={setOpenModal} carImg={photo} />
        </Modal>
      )}
      <main className="my-0 mt-[40px] mx-auto xl:p-[30px] md:p-[20px] flex flex-col md:min-w-[375px] xl:max-w-[1600px] xl:flex-row xl:items-start md:items-center content-start justify-center  box-border gap-[15px] bg-gradient-to-b from-brand1 from-30%  to-brand4 to-20%">
        <section className="flex flex-col gap-[10px] p-[10px] xl:p-[30px]  md:p-[15px] box-border w-full content-center md:flex-wrap md:m-[5px] xl:m-[10px]">
          <section className=" relative shadow-sm flex p-[60px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-center g-[32px] rounded">
            <Image
              src={car?.coverImage}
              alt="Card"
              width={1280}
              height={300}
              style={{ objectFit: "fill" }}
            />
          </section>
          <section className=" shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start g-[32px] rounded">
            <h1 className="text-base font-semibold font-lex text-gray0">
              {car?.model}
            </h1>
            <div className="xl:flex mx:flex-col gap-3 text-center justify-center md:justify-between text-base ">
              <div className="flex justify-between items-center ">
                <span className="bg-brand4 h-[32px] w-[50px] rounded ml-[5px] py-[8px] px-[4px] text-brand1 ">
                  {car?.year}
                </span>
                <span className="bg-brand4 h-[32px] w-[50px] rounded ml-[5px] py-[8px] px-[4px]  text-brand1">
                  {car?.km}
                </span>
              </div>
              <p className="font-semibold">{car?.price}</p>
            </div>
            <Button
              className="xl:w-[20%] mt-3 w-[100px] min-w-[100px] rounded p-2 bg-brand1 text-whitefixed"
              variant="brand-1"
            >
              Comprar
            </Button>
          </section>
          <section className="shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start g-[32px] rounded ">
            <h2 className="font-semibold text-base">Descrição</h2>
            <p className="text-justify">{car?.description}</p>
          </section>
          <div className="shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start g-[32px] rounded">
            <CommentCard
              cor={user.color}
              datetime="11/04/2023"
              name="Roberto"
              initial="RS"
              key="1"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
          </div>
          <section className="shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start g-[32px] rounded">
            <CommentInput
              initials={user?.name}
              name={user?.name}
              cor={user?.color}
            />
          </section>
        </section>
        <aside className="flex content-center md:mt-[0px] md:mr-[0px] md:ml-[0px] xl:mt-[35px] xl:mr-[55px] xl:ml-[-40px] md:w-[752px] md:p-0  md: justify-center items-center p-[10px] flex-col  h-[100%] gap-[15px] ">
          <div className=" bg-whitefixed w-full flex rounded-lg flex-col items-center justify-center">
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
              initials={user.name}
            />
          </div>
        </aside>
      </main>
      {/* flex my-0 mx-auto flex-col gap-[10px] items-center  p-[30px] box-border w-[440px] xl:w-full content-center xl:flex-wrap md:m-1 */}
    </>
  );
};

export default CardPage;
