import React from "react";

interface Props {
  currentDate: string;
  nextDay: () => void;
  previousDay: () => void;
}

const DateSelector = ({ currentDate, nextDay, previousDay }) => {
  return (
    <div className="flex">
      <div
        className="w-1/3 py-5 bg-gray-200 text-center cursor-pointer"
        onClick={previousDay}
      >
        Previous Day
      </div>
      <div className="w-1/3 py-5 text-center">{currentDate}</div>
      <div
        className="w-1/3 py-5 bg-gray-200 text-center cursor-pointer"
        onClick={nextDay}
      >
        Next Day
      </div>
    </div>
  );
};

export default DateSelector;
