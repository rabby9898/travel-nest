import { useEffect, useState } from "react";
import Cards from "./Cards";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();

  const category = params.get("category");

  useEffect(() => {
    fetch("room.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else setRooms(data);
      });
  }, [category]);
  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 py-16">
          {rooms.map((room) => (
            <Cards key={room._id} room={room}></Cards>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
          <Heading
            center
            title={"No Rooms Available!"}
            subtitle={"Please select other categories"}
          />
        </div>
      )}
    </Container>
  );
};

export default Room;
