import { useState } from "react";
import { House, MessageSquareDot, Package2, Settings, ShoppingBag, UsersRound } from "lucide-react";

const Sidebar = () => {
    const [selectedSB, setSelectedSB] = useState("dashboard");

    return (
        <>
            <aside className="flex-1 px-10 py-6 relative">
                <h3 className="text-3xl font-semibold text-center">Flone.</h3>

                <ul className="mt-10 h-full flex flex-col overflow-hidden relative">
                    <li
                        className={`w-full flex items-center gap-4 p-3 transition-all 
                            ease-in-out cursor-pointer
                            ${selectedSB === "dashboard" ?
                                "bg-violet-700 text-white rounded-lg" : ""}`
                        }
                        onClick={() => setSelectedSB("dashboard")}
                    >
                        <House width={20} />
                        <span className="">Dashboard</span>
                    </li>
                    <li
                        className={`w-full flex items-center gap-4 p-3 transition-all 
                            ease-in-out cursor-pointer
                            ${selectedSB === "orders" ?
                                "bg-violet-700 text-white rounded-lg" : ""}`
                        }
                        onClick={() => setSelectedSB("orders")}
                    >
                        <ShoppingBag width={20} />
                        <span>Orders</span>
                    </li>
                    <li
                        className={`w-full flex items-center gap-4 p-3 transition-all 
                            ease-in-out cursor-pointer
                            ${selectedSB === "messages" ?
                                "bg-violet-700 text-white rounded-lg" : ""}`
                        }
                        onClick={() => setSelectedSB("messages")}
                    >
                        <MessageSquareDot width={20} />
                        <span>Messages</span>
                    </li>
                    <li
                        className={`w-full flex items-center gap-4 p-3 transition-all 
                            ease-in-out cursor-pointer
                            ${selectedSB === "customers" ?
                                "bg-violet-700 text-white rounded-lg" : ""}`
                        }
                        onClick={() => setSelectedSB("customers")}
                    >
                        <UsersRound width={20} />
                        <span>Customers</span>
                    </li>
                    <li
                        className={`w-full flex items-center gap-4 p-3 transition-all 
                            ease-in-out cursor-pointer
                            ${selectedSB === "products" ?
                                "bg-violet-700 text-white rounded-lg" : ""}`
                        }
                        onClick={() => setSelectedSB("products")}
                    >
                        <Package2 width={20} />
                        <span>Products</span>
                    </li>

                    <li
                        className={`absolute bottom-20 w-full flex items-center 
                            gap-4 p-3 transition-all ease-in-out cursor-pointer
                            ${selectedSB === "settings" ?
                                "bg-violet-700 text-white rounded-lg" : ""}`
                        }
                        onClick={() => setSelectedSB("settings")}
                    >
                        <Settings />
                        <span>Settings</span>
                    </li>
                </ul>


            </aside>
        </>
    );
};

export default Sidebar;