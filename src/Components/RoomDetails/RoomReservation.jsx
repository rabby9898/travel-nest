import { useState } from "react";
import Calender from "./Calender";
import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import BookingModal from "../Dashboard/Modal/BookingModal";
import useAuth from "../../Hooks/useAuth/useAuth";

const RoomReservation = ({ roomData }) => {
  const { user } = useAuth();
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const [value, setValue] = useState({
    startDate: new Date(roomData?.from),
    endDate: new Date(roomData?.to),
    key: "selection",
  });

  // totalDays into Price
  const totalDays = parseInt(
    formatDistance(new Date(roomData?.to), new Date(roomData?.from)).split(
      " "
    )[0]
  );
  const totalPrice = totalDays * roomData?.price;

  const handleSelect = (ranges) => {
    setValue({ ...value });
  };

  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    host: roomData?.host?.email,
    location: roomData?.location,
    price: totalPrice,
    to: value.endDate,
    from: value.startDate,
    title: roomData?.title,
    roomId: roomData?._id,
    image: roomData?.image,
  });
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {roomData.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender handleSelect={handleSelect} value={value} />
      </div>

      <hr />
      <div className="p-4">
        <Button onClick={() => setIsOpen(true)} label="Reserve" />
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
      <BookingModal
        closeModal={closeModal}
        isOpen={isOpen}
        bookingInfo={bookingInfo}
      />
    </div>
  );
};

export default RoomReservation;
