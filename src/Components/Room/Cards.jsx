import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Cards = ({ room }) => {
  const { _id, price, location, image, title } = room;
  return (
    <Link to={`/roomDetails/${_id}`}>
      <div className="col-span-1 cursor-pointer group">
        <div className="flex flex-col gap-2 w-full">
          <div
            className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
          >
            <img
              className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
              src={image}
              alt="Room"
            />
            <div
              className="
            absolute
            top-3
            right-3
          "
            ></div>
          </div>
          <div className="font-semibold text-xl">{title}</div>
          <div className="flex items-center gap-2 font text-lg my-4">
            <MdLocationOn className="text-red-600 text-xl" />
            {location}
          </div>
          {/* <div className="font-light text-neutral-500">
            5 nights . June 19 - 26
          </div> */}
          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold">$ {price}</div>
            <div className="font-light">night</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
