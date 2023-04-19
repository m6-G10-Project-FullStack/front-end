import { useState, useMemo } from "react";
import { useAuth } from "../../contexts/authContext";
import { Button } from "../Button";

export const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser, setIsLoged } = useAuth();

  const randomColor = useMemo(() => Math.floor(Math.random() * 11 + 1), []);

  return (
    <div className="relative">
      <button
        className="font-lex font-semibold text-base py-1 px-3 rounded transition ease-in border-[1px] bg-gray10 border-gray10 text-gray2 flex items-center gap-2 hover:bg-gray0 hover:text-gray10 hover:border-gray0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`rounded-full w-7 h-7 bg-random${randomColor} flex items-center justify-center text-sm`}
        >
          <p className="text-whitefixed">RA</p>
        </div>
        <p>{user.username}</p>
      </button>

      {isOpen && (
        <menu className="absolute top-11 left-0 z-10 w-full bg-gray10 p-4 rounded flex flex-col items-start gap-1 text-gray2">
          <button>Editar perfil</button>
          <button>Editar endereço</button>
          {user.is_anouncer && <button>Editar anúncios</button>}
          <button onClick={() => setIsLoged(false)}>Sair</button>
        </menu>
      )}
    </div>
  );
};
