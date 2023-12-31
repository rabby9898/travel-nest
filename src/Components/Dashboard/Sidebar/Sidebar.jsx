import { useState } from "react";
// Components
import logoImg from "../../../assets/logo-travel-nest.png";

// Icons
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem/MenuItem";
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useRole from "../../../Hooks/useRole/useRole";
import GuestMenu from "../GusetMenu/GuestMenu";
import AdminMenu from "../AdminMenu/AdminMenu";
import HostMenu from "../HostMenu/HostMenu";
import toast from "react-hot-toast";
const Sidebar = () => {
  const { logOut } = useAuth();
  const [toggle, setToggle] = useState(false);
  const [isActive, setActive] = useState(false);
  const [role] = useRole();
  const navigate = useNavigate();
  console.log("Role -------->", role);
  //   For guest/host menu item toggle button
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogOut = () => {
    logOut();
    navigate("/");
    toast.success("Log out Successfully");
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                // className="hidden md:block"
                src={logoImg}
                alt="logo"
                width="130"
                height="120"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-80 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-blue-100 mx-auto">
              <Link to="/">
                <img
                  // className="hidden md:block"
                  src={logoImg}
                  alt="logo"
                  width="130"
                  height="120"
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* If a user is host */}
            {role === "host" && <ToggleBtn toggleHandler={toggleHandler} />}
            <nav>
              {role === "host" ? toggle ? <HostMenu /> : <GuestMenu /> : ""}
              {role === "admin" && <AdminMenu></AdminMenu>}
              {role === "guest" && <GuestMenu></GuestMenu>}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          />
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-blue-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
