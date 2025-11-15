import { X } from "lucide-react"

const Filters = ({ toggleFilter, handleFilter }) => {
    return (
        <aside className={`fixed top-0 w-80 h-full px-5 py-18 bg-white shadow-md z-20 transition-all duration-300 easer-out ${!toggleFilter ? "-left-80" : "left-0"} `}>
            <div className="absolute top-5 right-6">
                <X onClick={handleFilter} className="cursor-pointer" />
            </div>

            <div>
                <h3 className="text-xl text-medium mb-4">Categories</h3>

                <ul className="mb-6 flex flex-col gap-2">
                    <li className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <input type="checkbox" name="Dresses" id="Dresses" />
                            <label htmlFor="Dresses" className="text-sm">Dresses</label>
                        </div>
                        <span className="text-sm">(12)</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <input type="checkbox" name="T-Shirt" id="T-Shirt" />
                            <label htmlFor="T-Shirt" className="text-sm">T-Shirt</label>
                        </div>
                        <span className="text-sm">(12)</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <input type="checkbox" name="Shorts" id="Shorts" />
                            <label htmlFor="Shorts" className="text-sm">Shorts</label>
                        </div>
                        <span className="text-sm">(12)</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <input type="checkbox" name="Bags" id="Bags" />
                            <label htmlFor="Bags" className="text-sm">Bags</label>
                        </div>
                        <span className="text-sm">(12)</span>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col mb-6">
                <h3 className="text-xl text-medium mb-4">Price</h3>
                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        name="price"
                        id="min"
                        placeholder="Min"
                        className="w-full h-10 border border-black outline-0 px-2"
                    />
                    <input
                        type="number"
                        name="price"
                        id="max"
                        placeholder="Max"
                        className="w-full h-10 border border-black outline-0 px-2"
                    />
                </div>
            </div>

            <div>
                <h3 className="text-xl text-medium mb-4">Size</h3>

                <ul className="flex flex-col gap-1">
                    <li className="flex items-center gap-3">
                        <input type="checkbox" id="s" />
                        <label htmlFor="s" className="text-sm ">S</label>
                    </li>
                    <li className="flex items-center gap-3">
                        <input type="checkbox" id="m" />
                        <label htmlFor="m" className="text-sm">M</label>
                    </li>
                    <li className="flex items-center gap-3">
                        <input type="checkbox" id="l" />
                        <label htmlFor="l" className="text-sm">L</label>
                    </li>
                    <li className="flex items-center gap-3">
                        <input type="checkbox" id="xl" />
                        <label htmlFor="xl" className="text-sm">XL</label>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Filters