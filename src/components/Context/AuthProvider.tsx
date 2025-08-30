import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { validateAuthorization } from "../../lib/api/validateUser";

// 👇 context
export const AuthProviderContext = createContext<ProviderContextI>({
  userData: {
    accessToken: null,
    user_id: null,
    given_name: null,
    family_name: null,
    picture: null,
    is_authenticated: false,
  },
  setUserData: () => {},
});

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserI>({
    accessToken: null,
    user_id: null,
    given_name: null,
    family_name: null,
    picture: null,
    is_authenticated: false,
  });

  useEffect(() => {
    const validate = async () => {
      try {
        const response = await validateAuthorization();

        if (response.status === 200) {
          console.log("AuthProvider", response.data);
          setUserData({ ...response.data, is_authenticated: true });

          // socket.emit("user-online", data?.data?.user_id);
          // socket.emit("register", data?.data?.user_id);
        }
      } catch (error) {
        console.log("Error found", {
          file_path: "AuthProvider.tsx",
          error,
        });
        throw new Error("Something went wrong");
      }
    };

    validate();

    return () => {
      // socket.off("user-online");
    };
  }, [location.pathname]);

  return (
    <AuthProviderContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthProviderContext.Provider>
  );
};

export default AuthWrapper;

// ----------------- types ------------------
interface ProviderContextI {
  userData: {
    accessToken: string | null;
    user_id: string | null;
    given_name: string | null;
    family_name: string | null;
    picture: string | null;
    is_authenticated: boolean;
  };
  setUserData: Dispatch<SetStateAction<any>>;
}

interface UserI {
  accessToken: string | null;
  user_id: string | null;
  given_name: string | null;
  family_name: string | null;
  picture: string | null;
  is_authenticated: boolean;
}
