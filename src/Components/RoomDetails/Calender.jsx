import { DateRange } from "react-date-range";

const Calender = ({ value, handleSelect }) => {
  return (
    <div>
      <DateRange
        rangeColors={["#3b59b9"]}
        ranges={[value]}
        onChange={handleSelect}
        date={value.startDate}
        direction="vertical"
        showDateDisplay={false}
        minDate={value.startDate}
        maxDate={value.endDate}
      />
    </div>
  );
};

export default Calender;
