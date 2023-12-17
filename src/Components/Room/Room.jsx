import { useEffect, useState } from "react";
import Cards from "./Cards";
import Container from "../Shared/Container";

const Room = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("room.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  });
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {rooms.map((room) => (
          <Cards key={room._id} room={room}></Cards>
        ))}
      </div>
    </Container>
  );
};

export default Room;
