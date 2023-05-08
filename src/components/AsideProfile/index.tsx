import React from "react";
import { Button } from "../Button";
import { useAuth } from "../../contexts/authContext";

interface iAsideProps {
  name?: string;
  color?: string;
  description?: string;
}

const AsideProfile = ({ name, color, description }: iAsideProps) => {
  const { idSeller, router } = useAuth();
  return (
    <div className="bg-gray10 w-full  justify-center items-center flex flex-col rounded-lg p-3 md:w-full ">
      <div
        className={`flex justify-center items-center w-20 h-20 rounded-full text-gray10 font-medium text-2xl bg-${color}`}
      >
        <p className="text-whitefixed">
          {name?.toUpperCase().split("")[0]}
          {name?.toUpperCase().split("")[1]}
        </p>
      </div>
      <h3 className="font-lex font-semibold text-xl text-gray1 mb-7">{name}</h3>
      <p className="font-inter font-normal text-base text-justify mb-7 text-gray2">
        {description}
      </p>
      <Button
        onClick={() => router.push(`/user_page/${idSeller}`)}
        variant="gray-0"
      >
        Ver todos anúncios
      </Button>
    </div>
  );
};

export default AsideProfile;
