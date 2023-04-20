import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { iUser } from "../@types";

interface iAuthContext {
  isLoged: boolean;
  setIsLoged: Dispatch<SetStateAction<boolean>>;
  user: iUser;
  setUser: Dispatch<SetStateAction<iUser>>;
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
    is_anouncer: true,
  });

  return (
    <AuthContext.Provider value={{ isLoged, setIsLoged, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
