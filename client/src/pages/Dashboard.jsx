import { Video } from "lucide-react";
import DashboardNav from "../components/DashboardNav";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {

    return (
        <section className="w-full h-screen flex overflow-hidden">
            <Sidebar />

            <main className="bg-slate-100 flex-4">
                <DashboardNav />

                <div className="m-10 flex gap-4 justify-between">
                    <div className="flex-2">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="py-4 px-8 rounded-lg bg-white shadow-md">
                                <h4 className="text-xs font-medium">Total Earning</h4>
                                <h2 className="text-center text-xl font-semibold mt-6">242.87K</h2>
                                <p className="text-xs mt-2">From the running month</p>
                            </div>
                            <div className="py-4 px-8 rounded-lg bg-white shadow-md">
                                <h4 className="text-xs font-medium">Average Earning</h4>
                                <h2 className="text-center text-xl font-semibold mt-6">176.87K</h2>
                                <p className="text-xs mt-2">Daily Earning of this month</p>
                            </div>
                            <div className="py-4 px-8 rounded-lg bg-white shadow-md">
                                <h4 className="text-xs font-medium">Conversation Rate</h4>
                                <h2 className="text-center text-xl font-semibold mt-6">76.86%</h2>
                                <p className="text-xs mt-2">+6.04% greater that last month</p>
                            </div>
                        </div>
                    </div>

                    <aside className="flex-1">
                        <div className="bg-white w-2/3 mx-auto rounded-lg p-4">
                            <h3 className="text-xl font-medium flex items-center gap-1">
                                <span className="bg-purple-400 rounded-full px-2 py-1" >
                                    <Video width={18} />
                                </span>
                                Daily Meeting
                            </h3>
                            <div className="flex items-center justify-center gap-2 mt-2">
                                <span className="py-1 px-2 bg-gray-400/10 rounded-full text-[10px]">12+ Persons</span>
                                <span className="p-1 bg-gray-400/10 rounded-full text-[10px]">8:30 PM</span>
                            </div>
                            <button className="px-4 py-2 bg-black text-white text-sm rounded-lg mt-6 cursor-pointer">
                                Click for meeting link
                            </button>
                        </div>
                    </aside>
                </div>
            </main>
        </section>
    );
};

export default Dashboard;