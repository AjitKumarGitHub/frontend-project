import { useState } from "react";
import AccordianItem from "./AccordianItem";
import { RiArrowDropDownLine } from "react-icons/ri";
const announcementData = [
  {
    title: "Outing Schedule for every department",
    time: "5 minutes ago",
  },
  {
    title: "Meeting HR Department",
    time: "Yesyterday, 12.30 PM",
  },
  {
    title: "IT Department need two more talents for UX/UI Designer position",
    time: "Yesyterday, 09.15 AM",
  },
  {
    title: "Meeting Manager",
    time: "Yesyterday, 10.15 AM",
  },
];

const dates = [
  { id: 1, date: "12 Sept 2021" },
  { id: 2, date: "11 Sept 2021" },
  { id: 3, date: "10 Sept 2021" },
  { id: 4, date: "9 Sept 2021" },
  { id: 5, date: "8 Sept 2021" },
  { id: 6, date: "7 Sept 2021" },
];

const Announcements = () => {
  const [currDate, setCurrDate] = useState(dates[0].date);
  const [openDates, setOpenDates] = useState(false);

  return (
    <div className="border-2 border-gray-400 mt-4 rounded-md">
      <div className="flex justify-between p-4">
        <p className="text-2xl text-blue-900 font-semibold">Announcements</p>
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
      <div className="space-y-4 mt-2 mb-2 px-4 h-80 overflow-y-auto">
        {announcementData.map((data, i) => (
          <AccordianItem key={i} data={data} />
        ))}
      </div>
      <div className="border-gray-400 p-4 border-t-2 text-center text-orange-600 text-xl">
        <button>See all announcements</button>
      </div>
    </div>
  );
};

export default Announcements;
