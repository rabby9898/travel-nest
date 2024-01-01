import MenuItem from "../Sidebar/MenuItem/MenuItem";

import { MdBedroomParent, MdOutlineManageHistory } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
const HostMenu = () => {
  return (
    <>
      {/* Menu Items */}

      <MenuItem
        icon={MdBedroomParent}
        label="My Listing"
        address="my-listing"
      />
      <MenuItem
        icon={IoIosAddCircleOutline}
        label="Add Room"
        address="add-room"
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Bookings"
        address="manage-bookings"
      />
    </>
  );
};

export default HostMenu;
