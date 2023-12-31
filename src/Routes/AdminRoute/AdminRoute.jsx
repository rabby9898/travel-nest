import { Navigate } from "react-router-dom";
import Loader from "../../Components/Shared/Loader/Loader";
import useRole from "../../Hooks/useRole/useRole";

const AdminRoute = ({ children }) => {
  const [role, loading] = useRole();
  if (loading) return <Loader />;
  if (role.role === "admin") return children;
  return <Navigate to={"/dashboard"} />;
};

export default AdminRoute;
