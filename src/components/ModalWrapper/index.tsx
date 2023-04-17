import React, { ReactNode } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

interface iModalProps {
  children: ReactNode;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ children, setOpenModal }: iModalProps) => {
  const modalRef = useOutsideClick(() => {
    setOpenModal(false);
  });

  return (
    <div className="fixed rign-inset w-full h-full z-50">
      <div className="w-full h-full flex justify-center items-start bg-gray-800">
        <div
          className="flex justify-normal h-custom365 w-full px-custom15 py-0 mt-24 relative"
          ref={modalRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
