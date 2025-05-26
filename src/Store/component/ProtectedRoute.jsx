import { Navigate } from "react-router-dom";
import { useAuthorization } from "../../context/AuthNontext";


export const ProtectedRoute = ({ children }) => {
  
    const { admin } = useAuthorization();

  return admin ? children : <Navigate to="/admin" />;
};