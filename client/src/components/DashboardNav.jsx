import { Bell, ChevronDown, UserRound } from "lucide-react";

const DashboardNav = () => {

  return (
    <nav className="w-full bg-white px-3 py-4 flex items-center justify-between">
      <div className="flex-1 flex items-center justify-end gap-4 pr-4">
        <ul className="flex items-center gap-4">
          <li>
            <Bell width={20} className="cursor-pointer" />
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <UserRound width={20} />
            <span className="flex items-center gap-1 text-sm">
              owais <ChevronDown width={16}
              />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNav;
