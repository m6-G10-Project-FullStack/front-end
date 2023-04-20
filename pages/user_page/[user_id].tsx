import React, { useState } from "react";
import { Button } from "../../src/components/Button";
import { Modal } from "../../src/components/ModalWrapper";
import ModalAnuncio from "../../src/components/ModalAnuncio";

const Test = () => {
  const [openAnuncio, setOpenModalAnuncio] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <div className="h-fit">
      <Button
        onClick={() => {
          setOpenModalAnuncio(true);
          setTitle("Criar anúncio");
        }}
        variant="border-gray-4"
      >
        Criar anúncio
      </Button>
      {openAnuncio && (
        <Modal setOpenModal={setOpenModalAnuncio}>
          <ModalAnuncio
            setOpenModalAnuncio={setOpenModalAnuncio}
            title={title}
          />
        </Modal>
      )}
    </div>
  );
};

export default Test;
