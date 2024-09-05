import Card from "./Card";
import EmployeeStats from "./EmployeeCard";
const cardData = [
  {
    title: "Available Position",
    number: 24,
    vacancy: "4 urgently needed",
    color: "rgb(255, 239, 231)",
    textcolor: "rgb(206, 121, 125)",
  },
  {
    title: "Job Open",
    number: 10,
    vacancy: "4 actively hiring",
    color: "rgb(232, 240, 251)",
    textcolor: "rgb(110, 176, 244)",
  },
  {
    title: "New Employees",
    number: 24,
    vacancy: "4 Department",
    color: "rgb(253, 235, 249)",
    textcolor: "rgb(232, 153, 211)",
  },
];

const employeeStatsData = [
  {
    title: "Total Employees",
    number: 24,
    nummen: 12,
    numwomen: 12,
    percs: [12, 24, 36],
  },
  {
    title: "Talent Requests",
    number: 24,
    nummen: 12,
    numwomen: 12,
    percs: [12, 24, 36],
  },
];

const CardSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        {cardData.map((card, idx) => (
          <Card data={card} key={idx} />
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        {employeeStatsData.map((card, idx) => (
          <EmployeeStats {...card} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
