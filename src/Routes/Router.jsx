import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign Up/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/roomDetails/:id",
        element: (
          <PrivateRoutes>
            <RoomDetails></RoomDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("/room.json"),
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
]);
export default router;
