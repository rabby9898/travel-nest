import { MdManageAccounts } from "react-icons/md";
import MenuItem from "../Sidebar/MenuItem/MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdManageAccounts}
        label="Manage Users"
        address="manage-users"
      />
    </>
  );
};

export default AdminMenu;
