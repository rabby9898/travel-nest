import axiosSecure from "./AxiosSecure";

export const getRooms = async () => {
  const { data } = await axiosSecure("/rooms");

  return data;
};

// get rooms at table list
export const getTableRooms = async (email) => {
  const { data } = await axiosSecure(`/rooms/${email}`);
  return data;
};

// get single rooms
export const getSingleRooms = async (id) => {
  const { data } = await axiosSecure(`/room/${id}`);
  return data;
};
// add room
export const addRoom = async (roomData) => {
  const { data } = await axiosSecure.post(`/add-room`, roomData);
  return data;
};
