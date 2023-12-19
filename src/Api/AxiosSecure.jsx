import axios from "axios";
import { clearToken } from "./UsersApi";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});

axiosSecure.interceptors.response.use(
  (response) => response,
  async (err) => {
    console.log("Error From Interceptor:", err.message);
    if (
      err.message &&
      (err.message.status === 401 || err.message.status === 403)
    ) {
      await clearToken();
      window.location.replace("/login");
    }
    Promise.reject(err);
  }
);
export default axiosSecure;
