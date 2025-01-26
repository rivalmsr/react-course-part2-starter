import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface LoginAction {
  type: 'LOGIN';
  user: string;
}

interface LogoutAction {
  type: 'LOGOUT';
}

export type AuthAction = LoginAction | LogoutAction


const authReducer = (status: string, action: AuthAction): string => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return '';
    default:
      return status;
  }
}

interface Props {
  children: ReactNode
}

function AuthProvider({ children }: Props) {
  const [username, dispatch] = useReducer(authReducer, '');

  return (
    <AuthContext.Provider value={{ username, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
