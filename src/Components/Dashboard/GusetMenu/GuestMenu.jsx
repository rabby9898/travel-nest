import { MdOutlineAddHomeWork } from "react-icons/md";
import MenuItem from "../Sidebar/MenuItem/MenuItem";

import { BsGraphUp } from "react-icons/bs";
const GuestMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdOutlineAddHomeWork}
        label="My Booking"
        address="my-bookings"
      />
      <MenuItem icon={BsGraphUp} label="Statistics" address="statistics" />
    </>
  );
};

export default GuestMenu;
