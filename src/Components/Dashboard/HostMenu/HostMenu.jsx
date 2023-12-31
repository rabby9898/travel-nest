import MenuItem from "../Sidebar/MenuItem/MenuItem";
import { BsGraphUp } from "react-icons/bs";

import { MdBedroomParent } from "react-icons/md";
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
      <MenuItem icon={BsGraphUp} label="Statistics" address="statistics" />
    </>
  );
};

export default HostMenu;
