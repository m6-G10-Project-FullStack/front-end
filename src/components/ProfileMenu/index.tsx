import { useState, useMemo } from "react";
import { useAuth } from "../../contexts/authContext";
import { Button } from "../Button";
import { destroyCookie } from "nookies";
import { Modal } from "../Modal";
import ModalEditProfile from "../ModalEditProfile";
import ModalEditAddress from "../ModalEditAddress";
import { setCookie, parseCookies } from "nookies";

export const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModalEditProfile, setOpenModalEditProfile] = useState(false);
  const [openModalEditAddress, setOpenModalEditAddress] = useState(false);
  const { user, setIsLogged: setIsLogged, router } = useAuth();

  const randomColor = useMemo(() => Math.floor(Math.random() * 11 + 1), []);

  const clearTokenCookie = () => {
    destroyCookie(null, "token");
    setIsLogged(false);
  };
  const goToSellerPage = (id: string) => {
    setCookie(null, "idSeller", id);
    router.push(`/user_page/${id}`);
  };

  return (
    <>
      {openModalEditProfile && (
        <Modal setOpenModal={setOpenModalEditProfile}>
          <ModalEditProfile setOpenModalEditProfile={setOpenModalEditProfile} />
        </Modal>
      )}
      {openModalEditAddress && (
        <Modal setOpenModal={setOpenModalEditAddress}>
          <ModalEditAddress setOpenModalEditAddress={setOpenModalEditAddress} />
        </Modal>
      )}
      {/* ----- Desktop ----- */}
      <div className="relative hidden md:block md:min-w-[160px]">
        <button
          className="font-lex font-semibold text-base w-full py-1 px-3 rounded transition ease-in border bg-gray10 border-gray10 text-gray2 flex items-center gap-2 hover:bg-gray0 hover:text-gray10 hover:border-gray0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`rounded-full w-7 h-7 bg-random${randomColor} flex items-center justify-center text-sm`}
          >
            {user.name && (
              <p className="text-whitefixed">
                {user.name.toUpperCase().split("")[0]}
                {user.name.toUpperCase().split("")[1]}
              </p>
            )}
          </div>
          <p>{user!.name}</p>
        </button>

        {isOpen && (
          <menu className="absolute top-11 left-0 z-10 w-full bg-gray10 p-4 rounded flex flex-col items-start gap-2 text-gray2">
            <button
              className="p-0"
              onClick={() => setOpenModalEditProfile(true)}
            >
              Editar perfil
            </button>
            <button
              className="p-0"
              onClick={() => setOpenModalEditAddress(true)}
            >
              Editar endereço
            </button>
            {user!.is_seller && (
              <button className="p-0" onClick={() => goToSellerPage(user.id)}>
                Editar anúncios
              </button>
            )}
            <button className="p-0" onClick={clearTokenCookie}>
              Sair
            </button>
          </menu>
        )}
      </div>

      {/* ----- Mobile ----- */}
      <ul className="px-2 py-4 w-full flex flex-col gap-2 md:hidden">
        <li>
          <span className="flex gap-2">
            <div
              className={`rounded-full w-7 h-7 bg-random${randomColor} flex items-center justify-center text-sm text-whitefixed`}
            >
              {user.name && (
                <p className="text-whitefixed">
                  {user.name.toUpperCase().split("")[1]}
                  {user.name.toUpperCase().split("")[0]}
                </p>
              )}
            </div>
            <p>{user!.name}</p>
          </span>
        </li>
        <li>
          <button onClick={() => setOpenModalEditProfile(true)}>
            Editar perfil
          </button>
        </li>
        <li>
          <button onClick={() => setOpenModalEditAddress(true)}>
            Editar endereço
          </button>
        </li>
        {user.is_seller && (
          <li>
            <button onClick={() => goToSellerPage(user.id)}>
              Editar anúncio
            </button>
          </li>
        )}
        <li>
          <button onClick={clearTokenCookie}>Sair</button>
        </li>
      </ul>
    </>
  );
};
