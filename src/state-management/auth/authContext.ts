import React, { Dispatch } from "react";
import { AuthAction } from "./AuthProvider";

interface AuthContentType {
  username: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContentType>({} as AuthContentType);

export default AuthContext;

