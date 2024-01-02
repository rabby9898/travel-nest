import axiosSecure from "./AxiosSecure";

export const getAdminStats = async () => {
  const { data } = await axiosSecure("/admin-stat");
  return data;
};
