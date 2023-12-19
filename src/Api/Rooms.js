import axiosSecure from "./AxiosSecure";

export const getRooms = async () => {
  const { data } = await axiosSecure("/rooms");

  return data;
};

// get single rooms
export const getSingleRooms = async (id) => {
  const { data } = await axiosSecure(`/room/${id}`);
  return data;
};
