import axiosSecure from "./AxiosSecure";

export const savedUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: "guest",
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
  return data;
};

export const token = async (email) => {
  const { data } = await axiosSecure.post("/jwt", email);

  return data;
};
