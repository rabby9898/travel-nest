import { useState } from "react";
import AddRoomForm from "../../../Components/Form/AddRoom";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { imageUpload } from "../../../Api/ImageUpload";
import { addRoom } from "../../../Api/Rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [uploadImageText, setUploadImageText] = useState("Upload Image");
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const navigate = useNavigate();

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
    const to = dates.endDate;
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
    try {
      setLoading(true);
      const data = await addRoom(roomData);
      console.log(data);
      setUploadImageText("Uploading..");
      toast.success("Your Room Has Been Added");
      navigate("/dashboard/my-listing");
    } catch (err) {
      console.log(err);
      toast.error("Room Added Failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDates = (ranges) => {
    console.log(ranges);
    setDates(ranges.selection);
  };
  const handleImage = (image) => {
    setUploadImageText(image.name);
  };
  return (
    <div>
      <AddRoomForm
        dates={dates}
        handleSubmit={handleSubmit}
        handleDates={handleDates}
        handleImage={handleImage}
        uploadImageText={uploadImageText}
        loading={loading}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
