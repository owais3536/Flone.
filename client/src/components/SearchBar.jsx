import { X } from "lucide-react";

const SearchBar = ({ openSearch, setOpenSearch }) => {

    return (
        <>
            <div
                className={`fixed w-full h-full bg-black/70 z-50 transition-all duration-300 ease-in-out
                    ${openSearch ? "opacity-0 pointer-events-none " : "opacity-100 pointer-events-auto"}`}
                onClick={setOpenSearch}
            ></div>
            <div
                className={`w-full flex items-center justify-center fixed z-50 bg-white px-2 lg:px-0 transition-all duration-300 ease-in-out
                    ${openSearch ? "-top-100" : "top-0"}`}
            >
                <X className="absolute right-2 top-1 lg:right-10 lg:top-2 cursor-pointer" onClick={setOpenSearch} />
                <input
                    type="text"
                    className="w-full lg:w-1/2 border border-gray-500 my-10 rounded-md py-4 px-2 text-lg font-medium outline-none"
                    placeholder="Search"
                />
            </div>
        </>
    )
}

export default SearchBar;