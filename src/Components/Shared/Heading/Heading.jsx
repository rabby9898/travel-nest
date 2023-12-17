const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-4xl font-bold">{title}</div>
      <div className="font-light text-blue-700 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
