import { useEffect, useState } from "react";
import useAuth from "../useAuth/useAuth";
import { getRole } from "../../Api/UsersApi";

const useRole = () => {
  const { user, loading } = useAuth();
  const [role, setRole] = useState([]);

  useEffect(() => {
    getRole(user?.email).then((data) => setRole(data));
  }, [user]);
  return [role];
};

export default useRole;
