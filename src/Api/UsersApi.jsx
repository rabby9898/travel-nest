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

// create user token
export const getToken = async (email) => {
  const { data } = await axiosSecure.post("/jwt", email);

  return data;
};

// Remove user token
export const clearToken = async () => {
  const { data } = await axiosSecure.get("/logout");
  return data;
};
export const getRole = async (email) => {
  const { data } = await axiosSecure.get(`/user/${email}`);
  return data.role;
};

// get all users
export const getUsers = async () => {
  const { data } = await axiosSecure.get("/users");
  return data;
};

// update Role
export const updateRole = async (email, role) => {
  const currentUser = {
    email,
    role,
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser);
  return data;
};
