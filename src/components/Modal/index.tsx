import React, { ReactNode } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

interface iModalProps {
  children: ReactNode;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  carImg?: string;
}

export const Modal = ({ children, setOpenModal }: iModalProps) => {
  const modalRef = useOutsideClick(() => {
    setOpenModal(false);
  });

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div className="w-full h-screen flex justify-center items-star bg-gray2 bg-opacity-50">
        <div
          className="flex justify-center h-custom365 w-[344px] md:w-[520px] px-custom15 py-0 mt-[94px] relative"
          ref={modalRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
