import { useEffect, useState } from "react";

const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DaysOfTheWeek() {
  const [currentDayIndex, setCurrentDayIndex] = useState(getRotatedDayIndex());

  // calculates the rotating index based on week number
  function getRotatedDayIndex(): number {
    const startDate = new Date(2025, 0, 1);
    const today = new Date();

    const diffTime = today.getTime() - startDate.getTime();
    const diffWeeks = Math.floor(diffTime / (7 * 24 * 60 * 60 * 1000)); // week difference

    return diffWeeks % 7;
  }

  //update every day at midnight to reflect weekly rotation
  useEffect(() => {
    const checkDayChange = () => {
      const newIndex = getRotatedDayIndex();
      setCurrentDayIndex(newIndex);
    };

    // check immediately
    checkDayChange();

    // set up interval to check daily
    const interval = setInterval(checkDayChange, 1000 * 60 * 60); // check every hour

    return () => clearInterval(interval);
  }, []);

  return (
    <></>
    // <>
    //   {/* <div className="flex justify-center space-x-4 mt-10">
    //   {daysOfTheWeek.map((day, index) => (
    //     <div
    //       key={day}
    //       className={px-4 py-2 rounded-lg font-semibold ${
    //         index === currentDayIndex
    //           ? 'bg-blue-600 text-white shadow-md'
    //           : 'bg-gray-100 text-gray-700'
    //       }}
    //     >
    //       {day}
    //     </div>
    //   ))}
    // </div>
    // </> */}
  );
}
