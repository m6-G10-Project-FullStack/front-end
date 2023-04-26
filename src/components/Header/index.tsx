import { useAuth } from "../../contexts/authContext";
import Image from "next/image";
import Logo from "../../assets/Logo.png";
import { Button } from "../Button";
import { ProfileMenu } from "../ProfileMenu";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

export const Header = () => {
  const { isLoged, setIsLoged, user, router, token } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray10 w-full h-20 border-b-[1px] border-gray4 fixed top-0 left-0 z-20">
      <div className="relative z-30 flex justify-between items-center h-full w-full max-w-[1600px] my-0 mx-auto px-3 md:px-8">
        <Image
          className="cursor-pointer"
          width={158}
          src={Logo}
          alt="Motor Shop principal Logo"
          onClick={() => router.push("/")}
        />

        {/* ----- Desktop ----- */}
        <nav className="hidden md:flex md:items-center md:h-full md:border-l-[1px] md:border-gray4 md:pl-8">
          {isLoged && user ? (
            <ProfileMenu />
          ) : (
            <ul className="flex gap-2">
              <li>
                <Button
                  onClick={() => router.push("/login")}
                  variant="gray-10"
                  type="button"
                >
                  Fazer login
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => router.push("/register")}
                  variant="border-gray-4"
                  type="button"
                >
                  Cadastrar
                </Button>
              </li>
            </ul>
          )}
        </nav>

        {/* ----- Mobile ----- */}
        <nav className="md:hidden flex items-center justify-center text-gray1">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
          </button>

          <menu className="absolute top-[79px] left-0 z-30 items-center w-full bg-gray10">
            {isOpen &&
              token &&
              user &&
              (isLoged ? (
                <ProfileMenu />
              ) : (
                <ul className="px-2 py-4 w-full flex flex-col gap-8">
                  <li className="w-full">
                    <button
                      className="text-gray2 font-semibold self-start"
                      onClick={() => router.push("/login")}
                      type="button"
                    >
                      Fazer login
                    </button>
                  </li>
                  <li className="w-full">
                    <button
                      onClick={() => router.push("/register")}
                      className="font-lex font-semibold text-gray0 w-full py-1 rounded border-[1px] border-gray4 hover:bg-gray4 hover:text-gray10"
                      type="button"
                    >
                      Cadastrar
                    </button>
                  </li>
                </ul>
              ))}
          </menu>
        </nav>
      </div>
    </header>
  );
};
