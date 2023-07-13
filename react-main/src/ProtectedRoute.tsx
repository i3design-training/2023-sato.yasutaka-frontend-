import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type TokenCheck ={
  children:ReactNode;
}
export const ProtectedRoute : React.FC<TokenCheck>= ({ children }) => {
  const login  = localStorage.getItem('token');
  if (!login) {
    return <Navigate to="/users/login" />;
  }
  return  <>{children}</>;
};


