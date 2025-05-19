import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {




    const userInfo = {
    email: "raihan@bogra.com",
    password: "1234543",
    };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
