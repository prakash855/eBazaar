import { Navigate } from "react-router-dom";
import { useAuth } from "../StateManagement/Contexts/AuthContext/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="login" />;
};
