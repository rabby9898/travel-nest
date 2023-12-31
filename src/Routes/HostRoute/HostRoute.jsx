import { Navigate } from "react-router-dom";
import Loader from "../../Components/Shared/Loader/Loader";
import useRole from "../../Hooks/useRole/useRole";

const HostRoute = ({ children }) => {
  const [role, loading] = useRole();
  console.log("______>", role);
  if (loading) return <Loader />;
  if (role.role === "host") return children;
  return <Navigate to={"/dashboard"} />;
};

export default HostRoute;
