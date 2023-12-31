import MenuItem from "../Sidebar/MenuItem/MenuItem";
import { BsGraphUp } from "react-icons/bs";

import { MdBedroomParent } from "react-icons/md";
const GuestMenu = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label="Statistics" address="statistics" />

      {/* Menu Items */}

      <MenuItem
        icon={MdBedroomParent}
        label="My Listing"
        address="my-listing"
      />
    </>
  );
};

export default GuestMenu;
