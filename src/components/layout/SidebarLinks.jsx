import { useLocation, useNavigate } from "react-router-dom";

const SidebarLinks = ({ text, icon, redirect = "/" }) => {
  const navigate = useNavigate();
  let location = useLocation();

  const selected = location.pathname === redirect;

  return (
    <div
      className={`flex items-center gap-x-2 py-3 cursor-pointer ${
        selected
          ? "text-red-400"
          : "hover:text-red-600 hover:scale-105 transition-all"
      }`}
      onClick={() => navigate(`${redirect}`)}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default SidebarLinks;
