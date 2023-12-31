import MenuItem from "../Sidebar/MenuItem/MenuItem";

import { IoIosAddCircleOutline } from "react-icons/io";
const HostMenu = () => {
  return (
    <>
      <MenuItem
        icon={IoIosAddCircleOutline}
        label="Add Room"
        address="add-room"
      />
    </>
  );
};

export default HostMenu;
