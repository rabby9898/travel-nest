import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import Container from "../../Components/Shared/Container";
import Header from "../../Components/RoomDetails/Header";
import RoomInfo from "../../Components/RoomDetails/RoomInfo";
import RoomReservation from "../../Components/RoomDetails/RoomReservation";

const RoomDetails = () => {
  const roomData = useLoaderData();
  console.log(roomData);
  // const { id } = useParams();
  // const roomData = roomLoader.find((room) => room._id === id);
  const { title } = roomData;
  return (
    <Container>
      <Helmet>
        <title>Travel Nest | {title}</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto mt-16">
        <div className="flex flex-col gap-6">
          <Header roomData={roomData} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-10">
          <RoomInfo roomData={roomData} />
          <div className="col-span-3 order-first md:order-last mb-10">
            <h1>Calender</h1>
            <RoomReservation roomData={roomData} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
