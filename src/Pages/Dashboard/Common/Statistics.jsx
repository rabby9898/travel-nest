import { Helmet } from "react-helmet-async";
import useRole from "../../../Hooks/useRole/useRole";
// import GuestStatistics from "../../../Components/Dashboard/Statistics/Guest/GuestStatistics";
// import HostStatistics from "../../../Components/Dashboard/Statistics/Host/HostStatistics";
import AdminStatistics from "../../../Components/Dashboard/Statistics/Admin/AdminStatistics";

const Statistics = () => {
  const [role] = useRole();
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {/* {role === "guest" && <GuestStatistics />}
      {role === "host" && <HostStatistics />} */}
      {role === "admin" && <AdminStatistics />}
    </div>
  );
};

export default Statistics;
