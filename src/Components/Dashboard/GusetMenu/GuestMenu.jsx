import { MdOutlineAddHomeWork } from "react-icons/md";
import MenuItem from "../Sidebar/MenuItem/MenuItem";

const GuestMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdOutlineAddHomeWork}
        label="My Booking"
        address="my-booking"
      />
    </>
  );
};

export default GuestMenu;
