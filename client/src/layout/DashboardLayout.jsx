import { Outlet } from "react-router";
import DashboardNav from "../components/DashboardNav";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {

    return <>
        <div className="w-full h-screen flex overflow-hidden">
            <div className="flex-1">
                <Sidebar />
            </div>
            <div className="flex-4 bg-slate-100">
                <DashboardNav />
                <Outlet />
            </div>
        </div>
    </>;
};

export default DashboardLayout;