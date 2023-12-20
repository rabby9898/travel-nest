import { useState } from "react";
import AddRoomForm from "../../../Components/Form/AddRoom";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { imageUpload } from "../../../Api/ImageUpload";
import { eo } from "date-fns/locale";

const AddRoom = () => {
  const { user } = useAuth();
  const [dates, setDates] = useState({
    startDate: new Date(),
    ednDate: new Date(),
    key: "selection",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const price = form.price.value;
    const guests = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const to = dates.ednDate;
    const from = dates.startDate;
    const image = form.image.files[0];
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    const img_url = await imageUpload(image);

    const roomData = {
      location,
      category,
      title,
      to,
      from,
      price,
      guests,
      bathrooms,
      bedrooms,
      host,
      description,
      image: img_url?.data?.display_url,
    };
    console.log(roomData);
  };

  const handleDates = (ranges) => {
    console.log(ranges);
    setDates(ranges.selection);
  };
  return (
    <div>
      <AddRoomForm
        dates={dates}
        handleSubmit={handleSubmit}
        handleDates={handleDates}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
