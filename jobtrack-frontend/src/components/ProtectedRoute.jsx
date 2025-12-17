import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // Later, this will check: localStorage.getItem("token")
  // const token = null; // No fake authentication currently

  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }
  const token = "dev-mode";

  return children;
}
