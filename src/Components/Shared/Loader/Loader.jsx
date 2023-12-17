import { ScaleLoader } from "react-spinners";

const Loader = ({ MoonLoader }) => {
  return (
    <div
      className={` ${MoonLoader ? "h-[250px]" : "h-[70vh]"}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <ScaleLoader size={100} color="blue" />
    </div>
  );
};

export default Loader;
