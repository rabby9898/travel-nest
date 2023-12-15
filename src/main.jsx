import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import "./index.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Provider/AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
