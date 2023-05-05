import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { iUser, iUserResponse } from "../@types";
import { NextRouter, useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";
import { iLoginFormInputs } from "../../pages/login";
import api from "../services/api";
import jwt_decode from "jwt-decode";

interface iAuthContext {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  user: iUser | iUserResponse;
  setUser: Dispatch<SetStateAction<iUser>>;
  HandleFormLogin: (data: iLoginFormInputs) => void;
  router: NextRouter;
  token?: string;
  idSeller: string;
  setIdSeller: Dispatch<SetStateAction<string>>;
}

export const AuthContext = createContext<iAuthContext>({} as iAuthContext);

interface iAuthProvider {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: iAuthProvider) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<iUser>({} as iUser);
  const cookies = parseCookies();
  const [token, setToken] = useState<string>(cookies["token"] || "");
  const [idCar, setCarId] = useState<string>();
  const [idSeller, setIdSeller] = useState<string>("");

  const router = useRouter();

  const HandleFormLogin = async (data: iLoginFormInputs) => {
    const response = await api
      .post("/login", data)
      .then((res) => {
        setCookie(null, "token", res.data.token);
        const localtoken = parseCookies();
        if (localtoken) {
          setToken(localtoken["token"]);
          setIsLogged(true);
          router.push("/");
        }
      })
      .catch((err) => console.error(err));
  };

  const getUserData = async (id: string) => {
    try {
      const { data } = await api.get<iUser>(`/users/${id}`, {
        headers: { Authorization: `Bearer ${cookies["token"]}` },
      });
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cookies["token"]) {
      setToken(cookies["token"]);
      const decodedToken: any = jwt_decode(cookies["token"]);
      setIsLogged(true);
      getUserData(decodedToken.sub);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isLogged: isLogged,
        setIsLogged: setIsLogged,
        user,
        setUser,
        HandleFormLogin,
        router,
        token,
        idSeller,
        setIdSeller,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
