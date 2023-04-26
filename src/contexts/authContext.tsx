import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { iUser } from "../@types";
import { NextRouter, useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";
import Api from "../server/api";
import { iLoginFormInputs } from "../../pages/login";
import api from "../services/api";
import jwt_decode from "jwt-decode";

interface iAuthContext {
  isLoged: boolean;
  setIsLoged: Dispatch<SetStateAction<boolean>>;
  user?: iUser;
  setUser?: Dispatch<SetStateAction<iUser | undefined>>;
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
  const [isLoged, setIsLoged] = useState(false);
  const [user, setUser] = useState<iUser>();
  const cookies = parseCookies();
  const [token, setToken] = useState<string>(cookies["token"] || "");
  const [idCar, setCarId] = useState<string>();
  const [idSeller, setIdSeller] = useState<string>("");

  const router = useRouter();

  const HandleFormLogin = async (data: iLoginFormInputs) => {
    console.log(data);
    const response = await api
      .post("/login", data)
      .then((res) => {
        setCookie(null, "token", res.data.token);
        const localtoken = parseCookies();
        if (localtoken) {
          setToken(localtoken["token"]);
          setIsLoged(true);
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
      setIsLoged(true);
      getUserData(decodedToken.sub);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoged,
        setIsLoged,
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
