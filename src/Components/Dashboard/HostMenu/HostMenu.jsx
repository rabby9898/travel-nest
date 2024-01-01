import MenuItem from "../Sidebar/MenuItem/MenuItem";

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
    </>
  );
};

export default HostMenu;
