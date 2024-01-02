import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign Up/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import { getSingleRooms } from "../Api/Rooms";
import DashboardLayout from "../Layout/DashboardLayout";
import MyListing from "../Pages/Dashboard/Host/MyListing";
import AddRoom from "../Pages/Dashboard/Host/AddRoom";
import HostMenu from "../Components/Dashboard/HostMenu/HostMenu";
import HostRoute from "./HostRoute/HostRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import Profile from "../Pages/Dashboard/Common/Profile/Profile";
import MyBookings from "../Pages/Dashboard/Guest/MyBookings";
import ManageBookings from "../Pages/Dashboard/Host/ManageBookings";
import Statistics from "../Pages/Dashboard/Common/Statistics";

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
        loader: ({ params }) => getSingleRooms(params.id),
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
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: (
          <PrivateRoutes>
            <Statistics />
          </PrivateRoutes>
        ),
      },
      {
        path: "add-room",
        element: (
          <PrivateRoutes>
            <HostRoute>
              <AddRoom></AddRoom>
            </HostRoute>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-listing",
        element: (
          <PrivateRoutes>
            <HostRoute>
              <MyListing></MyListing>
            </HostRoute>
          </PrivateRoutes>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoutes>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRoutes>
            <MyBookings></MyBookings>
          </PrivateRoutes>
        ),
      },
      {
        path: "manage-bookings",
        element: (
          <HostRoute>
            <ManageBookings></ManageBookings>
          </HostRoute>
        ),
      },
    ],
  },
]);
export default router;
