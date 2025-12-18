import { useState } from "react";
import { House, Package2, ShoppingBag } from "lucide-react";
import { Link } from "react-router";

const Sidebar = () => {
    const [selectedSB, setSelectedSB] = useState("dashboard");

    return (
        <>
            <aside className="flex-1 px-10 py-6 relative">
                <h3 className="text-3xl font-semibold text-center">Flone.</h3>

                <ul className="mt-10 h-full flex flex-col overflow-hidden relative">
                    <li

                        onClick={() => setSelectedSB("dashboard")}
                    >
                        <Link
                            to="/dashboard"
                            className={`w-full flex items-center gap-4 p-3 transition-all 
                            ease-in-out cursor-pointer
                            ${selectedSB === "dashboard" ?
                                    "bg-violet-700 text-white rounded-lg" : ""}`
                            }
                        >
                            <House width={20} />
                            <span className="">Dashboard</span>
                        </Link>
                    </li>
                    <li

                        onClick={() => setSelectedSB("products")}
                    >
                        <Link
                            to="products"
                            className={`w-full flex items-center gap-4 p-3 transition-all 
                            ease-in-out cursor-pointer
                            ${selectedSB === "products" ?
                                    "bg-violet-700 text-white rounded-lg" : ""}`
                            }
                        >
                            <Package2 width={20} />
                            <span>Products</span>
                        </Link>
                    </li>
                    <li

                        onClick={() => setSelectedSB("orders")}
                    >
                        <Link
                            to="orders"
                            className={`w-full flex items-center gap-4 p-3 transition-all 
                            ease-in-out cursor-pointer
                            ${selectedSB === "orders" ?
                                    "bg-violet-700 text-white rounded-lg" : ""}`
                            }
                        >
                            <ShoppingBag width={20} />
                            <span>Orders</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;