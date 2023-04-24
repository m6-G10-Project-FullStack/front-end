import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { iUser } from "../@types";
import { NextRouter, useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";
import Api from "../server/api";
import { iLoginFormInputs } from "../../pages/login";
import api from "../services/api";

interface iAuthContext {
  isLoged: boolean;
  setIsLoged: Dispatch<SetStateAction<boolean>>;
  user: iUser;
  setUser: Dispatch<SetStateAction<iUser>>;
  HandleFormLogin: (data: iLoginFormInputs) => void;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  router: NextRouter;
}

export const AuthContext = createContext<iAuthContext>({} as iAuthContext);

interface iAuthProvider {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: iAuthProvider) => {
  const [isLoged, setIsLoged] = useState(false);
  const [user, setUser] = useState({
    username: "Róger Aguiar",
    email: "roger@kenzie.com.br",
    is_seller: true,
  });

  const router = useRouter();

  const [token, setToken] = useState("");
  console.log(token);

  const HandleFormLogin = async (data: iLoginFormInputs) => {
    console.log(data);
    const response = await api
      .post("/login", data)
      .then((res) => {
        setToken(res.data);
        setCookie(null, "token", res.data);
        const localtoken = parseCookies();
        if (localtoken) {
          setIsLoged(true);
          router.push("/");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <AuthContext.Provider
      value={{
        isLoged,
        setIsLoged,
        user,
        setUser,
        token,
        setToken,
        HandleFormLogin,
        router,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
