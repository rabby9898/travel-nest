import { MdOutlineAddHomeWork } from "react-icons/md";
import MenuItem from "../Sidebar/MenuItem/MenuItem";
import { GrUserAdmin } from "react-icons/gr";
import toast from "react-hot-toast";
import { BsGraphUp } from "react-icons/bs";
import useRole from "../../../Hooks/useRole/useRole";
import { useState } from "react";
import HostModal from "../Modal/HostRequestModal";
import { becomeHost } from "../../../Api/UsersApi";
import useAuth from "../../../Hooks/useAuth/useAuth";
const GuestMenu = () => {
  const [role] = useRole();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const closeModal = async () => {
    setIsOpen(false);
  };
  const modalHandler = async () => {
    // modal handler
    console.log("host");
    try {
      const data = await becomeHost(user?.email);
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Your request is submitted! wait for admin approval.");
      } else {
        toast.success("Please! wait for admin approval.");
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsOpen(false);
    }
  };
  return (
    <>
      <MenuItem
        icon={MdOutlineAddHomeWork}
        label="My Booking"
        address="my-bookings"
      />
      <MenuItem icon={BsGraphUp} label="Statistics" address="statistics" />
      {role === "guest" && (
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
        >
          <GrUserAdmin className="w-5 h-5" />

          <span className="mx-4 font-medium">Become A Host</span>
        </div>
      )}
      <HostModal
        closeModal={closeModal}
        modalHandler={modalHandler}
        isOpen={isOpen}
      />
    </>
  );
};

export default GuestMenu;
