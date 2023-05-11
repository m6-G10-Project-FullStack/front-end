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
import { iCarPhotos } from "../components/ModalAnuncio";
import { AsidePhotos } from "../components/AsidePhotos";

interface iCarData {
  carId: string;
  carKm: number | null;
  carPrice: number | null;
}

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
  carId: string;
  setCarId: Dispatch<SetStateAction<string>>;
  carData: iCarData;
  photos: iCarPhotos[];
  setPhotos: Dispatch<SetStateAction<iCarPhotos[]>>;
  setCarData: Dispatch<SetStateAction<iCarData>>;
  fipe: number | null;
  imageAtual: iCarPhotos;
  setImagemAtual: Dispatch<SetStateAction<iCarPhotos>>;
  setFipe: Dispatch<SetStateAction<number | null>>;
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
  const [carId, setCarId] = useState<string>("");
  const [idSeller, setIdSeller] = useState<string>("");
  const [carData, setCarData] = useState<iCarData>({
    carId: "",
    carKm: null,
    carPrice: null,
  });
  const [fipe, setFipe] = useState<number | null>(null);
  const [photos, setPhotos] = useState<iCarPhotos[]>([]);
  const [imageAtual, setImagemAtual] = useState<iCarPhotos>({} as iCarPhotos);
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

  const getGalery = async () => {
    await api
      .get<iCarPhotos[]>(`/gallery`, {
        headers: { Authorization: `Bearer ${cookies["token"]}` },
      })
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (cookies["token"]) {
      setToken(cookies["token"]);
      const decodedToken: any = jwt_decode(cookies["token"]);
      setIsLogged(true);
      getUserData(decodedToken.sub);
      getGalery();
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
        setCarId,
        carId,
        carData,
        setCarData,
        fipe,
        setFipe,
        photos,
        setPhotos,
        imageAtual,
        setImagemAtual,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
