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
  user: iUser;
  setUser: Dispatch<SetStateAction<iUser>>;
  HandleFormLogin: (data: iLoginFormInputs) => void;
  router: NextRouter;
}

export const AuthContext = createContext<iAuthContext>({} as iAuthContext);

interface iAuthProvider {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: iAuthProvider) => {
  const [isLoged, setIsLoged] = useState(false);
  const [user, setUser] = useState<any>();

  const router = useRouter();

  const [id, setId] = useState("");

  const HandleFormLogin = async (data: iLoginFormInputs) => {
    console.log(data);
    const response = await api
      .post("/login", data)
      .then((res) => {
        const decodedToken: any = jwt_decode(res.data.token);
        setId(decodedToken.sub);
        setCookie(null, "token", res.data);
        const localtoken = parseCookies();
        console.log(localtoken);
        if (localtoken) {
          setIsLoged(true);
          router.push("/");
        }
      })
      .catch((err) => console.error(err));
  };

  const getUserData = async (id: string) => {
    try {
      const { data } = await api.get<iUser>(`/users/${id}`);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("entrei");
    if (isLoged) {
      getUserData(id);
    }
  }, [id]);

  return (
    <AuthContext.Provider
      value={{
        isLoged,
        setIsLoged,
        user,
        setUser,
        HandleFormLogin,
        router,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
