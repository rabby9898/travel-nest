import { useEffect, useState } from "react";
import useAuth from "../useAuth/useAuth";
import { getRole } from "../../Api/UsersApi";

const useRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);

  return [role, loading];
};

export default useRole;
