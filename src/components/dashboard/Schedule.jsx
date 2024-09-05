import { useEffect, useState } from "react";
import AccordianItem from "./AccordianItem";
import { RiArrowDropDownLine } from "react-icons/ri";

const prioritySchedule = {
  title: "Review candidate applications",
  time: "Today-11.30 AM",
  tag: "priority",
};

const otherSchedule = {
  title: "Review candidate applications",
  time: "Today-11.30 AM",
  tag: "others",
};

const dates = [
  { id: 1, date: "12 Sept 2021" },
  { id: 2, date: "11 Sept 2021" },
  { id: 3, date: "10 Sept 2021" },
  { id: 4, date: "9 Sept 2021" },
  { id: 5, date: "8 Sept 2021" },
  { id: 6, date: "7 Sept 2021" },
];

const Schedule = () => {
  const [currDate, setCurrDate] = useState(undefined);
  const [openDates, setOpenDates] = useState(false);

  useEffect(() => {
    setCurrDate(dates[0].date);
  }, []);

  return (
    <div className="border-2 border-gray-300 pr-4 rounded-md w-full">
      <div className="flex justify-between gap-4 p-4">
        <p className="text-2xl text-blue-900 font-semibold">
          Upcoming Schedule
        </p>
        <div className="relative border-2 border-gray-400 my-auto px-4 rounded">
          <p
            onClick={() => setOpenDates(!openDates)}
            className="relative flex items-center gap-2 cursor-pointer text-gray-700 text-sm font-light"
          >
            {currDate} <RiArrowDropDownLine size={28} />
          </p>
          {openDates && (
            <div className="right-0 left-0 absolute flex flex-col space-y-1 bg-gray-200 rounded-md text-center text-lg overflow-hidden">
              {dates.map((date) => (
                <p
                  className="hover:bg-gray-400 px-4 cursor-pointer text-gray-700 font-medium text-sm"
                  onClick={() => setCurrDate(date.date)}
                  key={date.id}
                >
                  {date.date}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="space-y-4 my-2 px-4 h-96 overflow-y-auto">
        <div className="space-y-2">
          <p>Priority</p>
          {[1].map((id) => (
            <AccordianItem key={id} data={prioritySchedule} />
          ))}
        </div>
        <div className="space-y-2">
          <p>Others</p>
          {[1, 2, 3].map((id) => (
            <AccordianItem key={id} data={otherSchedule} />
          ))}
        </div>
      </div>
      <div className="border-gray-400 p-4 border-t-2 text-center text-orange-600 text-xl">
        <button>Create a new Schedule</button>
      </div>
    </div>
  );
};

export default Schedule;
