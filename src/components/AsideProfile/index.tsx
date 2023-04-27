import React from "react";
import { Button } from "../Button";
import { useAuth } from "../../contexts/authContext";

interface iAsideProps {
  initials?: string;
  name?: string;
  description?: string;
  cor: any;
}

const corMap = {
  random1: "bg-random1",
  random2: "bg-random2",
  random3: "bg-random3",
  random4: "bg-random4",
  random5: "bg-random5",
  random6: "bg-random6",
  random7: "bg-random7",
  random8: "bg-random8",
  random9: "bg-random9",
  random10: "bg-random10",
  random11: "bg-random11",
  random12: "bg-random12",
};

const AsideProfile = ({ cor, description, initials, name }: iAsideProps) => {
  const { idSeller, router } = useAuth();
  return (
    <div className="bg-gray10 w-full  justify-center items-center flex flex-col rounded-s p-3 md:w-full max-w-[351px] md:max-w-[440px]">
      <div
        className={`flex justify-center items-center font-inter font-medium text-2xl md:text-4xl leading-[56px] text-gray10 w-[77px] h-[77px] rounded-full md:w-[104px] md:h-[104px] mb-7  ${corMap[cor]}`}
      >
        {initials}
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
