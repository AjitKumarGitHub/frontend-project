import Announcements from "../components/dashboard/Announcements";
import CardSection from "../components/dashboard/CardSection";
import Recents from "../components/dashboard/Recents";
import Schedule from "../components/dashboard/Schedule";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-6">
      <div>
        <h1 className="mt-2 font-semibold text-blue-900 text-lg">Dashboard</h1>
        <CardSection />
        <Announcements />
      </div>

      <div className="flex flex-col lg:flex-col lg:items-center lg:mt-9 mt-6 md:flex-row md:items-center md:gap-x-6">
        <Recents />
        <Schedule />
      </div>
    </div>
  );
};

export default Home;
