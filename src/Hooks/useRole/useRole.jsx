import useAuth from "../useAuth/useAuth";
import { getRole } from "../../Api/UsersApi";
import { useQuery } from "@tanstack/react-query";
const useRole = () => {
  const { user, loading } = useAuth();

  // const [role, setRole] = useState([]);
  // useEffect(() => {
  //   setLoading(true);
  //   getRole(user?.email).then((data) => {
  //     setRole(data);
  //     setLoading(false);
  //   });
  // }, [user]);

  // return [role, loading];
  // using Tanstack query
  const { data: role, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getRole(user?.email),
    queryKey: ["role"],
  });
  return [role, isLoading];
};

export default useRole;
