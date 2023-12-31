import { Navigate } from "react-router-dom";
import Loader from "../../Components/Shared/Loader/Loader";
import useRole from "../../Hooks/useRole/useRole";

const HostRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) return <Loader />;
  if (role.role === "host") return children;
  return <Navigate to={"/dashboard"} />;
};

export default HostRoute;
