import { Bell, ChevronDown, Search, UserRound } from "lucide-react";

const DashboardNav = () => {

    return (
        <nav className="w-full bg-white px-3 py-4 flex items-center justify-between">
            <div className="flex-2 flex items-center gap-4 bg-gray-100 
                            rounded-full py-2 px-4"
            >
                <Search width={20} />
                <input type="text" placeholder="Search" name="search" className="w-full outline-none" />
            </div>

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