import Logo from "../../assets/svgs/Logo";
import SidebarLinks from "./SidebarLinks";
import Dashboard from "../../assets/svgs/Dashboard";

const Sidebar = () => {
  return (
    <div className="hidden sm:block md:w-1/12 lg:w-1/6 bg-gray-50">
      <div className="hidden lg:flex flex-col pl-6">
        <div className="pt-4 mb-8">
          <Logo />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-light">MAIN MENU</span>
          <SidebarLinks text="Home" icon={<Dashboard />} />
          <SidebarLinks text="Home" icon={<Dashboard />} redirect="/about" />
          <SidebarLinks text="Home" icon={<Dashboard />} redirect="/about" />
          <SidebarLinks text="Home" icon={<Dashboard />} redirect="/about" />
        </div>

        <div className="mt-12">
          <span className="text-xs font-light">OTHER</span>
          <SidebarLinks text="Home" icon={<Dashboard />} redirect="/about" />
          <SidebarLinks text="Home" icon={<Dashboard />} redirect="/about" />
        </div>
      </div>

      <div className="hidden md:block lg:hidden pt-12 px-2">
        <p className="text-center text-[9px] mb-2 font-light">MAIN MENU</p>
        <div className="flex flex-col gap-y-3 items-center mb-6">
          <Dashboard />
          <Dashboard />
          <Dashboard />
          <Dashboard />
        </div>
        <p className="text-center text-[10px] mb-2 font-light">OTHER</p>
        <div className="flex flex-col gap-y-3 items-center">
          <Dashboard />
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
