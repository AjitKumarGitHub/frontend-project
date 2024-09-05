import { useState } from "react";
import { Menu, SearchIcon, TvIcon } from "lucide-react";
import OverlaySidebar from "./OverlaySidebar";

const Topbar = () => {
  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="py-4 w-full border-b-2 border-gray-200 hidden md:flex items-center justify-between">
        {/* todo: change the text color here */}
        <div className="flex items-center gap-x-2 border-2 border-gray-200 rounded-sm px-3 w-1/3 lg:w-1/4">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="outline-none flex items-center justify-between py-2 flex-1"
            placeholder="Search"
          />
          <SearchIcon className="font-light text-gray-500 text-sm" />
        </div>

        <div className="flex items-center gap-x-5">
          <TvIcon className="text-gray-500" />
          <TvIcon className="text-gray-500" />
          <div className="flex items-center gap-x-2">
            <div className="h-6 w-6 rounded-full bg-blue-200"></div>
            <span className="hidden lg:block">Admirra John</span>
          </div>
        </div>
      </div>

      <div className="py-4 w-full border-b-2 border-gray-200 hidden sm:flex md:hidden items-center justify-between">
        {/* todo: change the text color here */}

        <div className="flex items-center gap-x-3">
          <Menu
            className="text-gray-500 hover:font-bold cursor-pointer"
            onClick={() => {
              setOpen((p) => !p);
            }}
          />
          <SearchIcon className="font-light text-gray-500 text-sm" />
        </div>

        <div className="flex items-center gap-x-5">
          <TvIcon className="text-gray-500" />
          <TvIcon className="text-gray-500" />
          <div className="flex items-center gap-x-2">
            <div className="h-6 w-6 rounded-full bg-blue-200"></div>
            <span className="hidden lg:block">Admirra John</span>
          </div>
        </div>
      </div>

      <OverlaySidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Topbar;
