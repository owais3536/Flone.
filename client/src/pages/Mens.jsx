import { Menu } from "lucide-react"
import Filters from "../components/Filters"
import ItemCard from "../components/ItemCard"
import Pagination from "../components/Pagination"
import { useState } from "react"

import { mensItemData } from "../../public/data";

const Mens = () => {
    const [filterMenu, setFilterMenu] = useState(false);

    function handleFilterMenu() {
        setFilterMenu(prev => !prev);
    }

    return (
        <main className="container mx-auto">
            <header
                className="w-full h-[50vh] bg-no-repeat bg-cover
                flex items-center justify-center relative bg-linear-to-r from-black/50 to-black/50"
            >
                <img src="/mens-banner.jpg" alt="" className="w-full h-full object-cover absolute mix-blend-overlay" />
                <h2 className="text-5xl text-white font-bold">Products</h2>
            </header>

            <div className="relative py-10">
                <div
                    onClick={handleFilterMenu}
                    className={`fixed inset-0 w-full h-full bg-black/70 z-10 transition-all duration-300 ease-in-out 
                        ${!filterMenu ? "pointer-events-none opacity-0" : "backdrop-opacity-100 pointer-events-all"}`}
                ></div>
                <Filters toggleFilter={filterMenu} handleFilter={handleFilterMenu} />

                <section className="w-full">
                    <div className="flex items-center justify-between border-b border-black/10 pb-4">
                        <div className="cursor-pointer">
                            <Menu onClick={handleFilterMenu} />
                        </div>
                        <Pagination />
                    </div>

                    <div
                        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-4"
                    >
                        {mensItemData.map((item) => (
                            <ItemCard key={item.id} name={item.name} src={item.src} originalPrice={item.originalPrice} discountPrice={item.discountPrice} />
                        ))}
                    </div>
                    <div className="flex items-center justify-end mt-10">
                        <Pagination />
                    </div>
                </section>
            </div>
        </main >
    )
}

export default Mens