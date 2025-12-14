import { X } from "lucide-react";

const SearchBar = ({ openSearch, setOpenSearch }) => {

    return (
        <>
            <div
                className={`fixed w-full h-full bg-black/30 z-50 transition-all duration-300 ease-in-out
                    ${openSearch ? "opacity-100 pointer-events-auto " : "opacity-0 pointer-events-none"}`}
                onClick={() => setOpenSearch(!openSearch)}
            ></div>
            <div
                className={`w-full flex items-center justify-center fixed z-50 bg-white px-2 lg:px-0 transition-all duration-300 ease-in-out
                    ${openSearch ? "top-0" : "-top-100"}`}
            >
                <X className="absolute right-2 top-1 lg:right-10 lg:top-2 cursor-pointer"
                    onClick={() => setOpenSearch(!openSearch)}
                />
                <input
                    type="text"
                    className="w-full lg:w-1/2 border border-gray-500 my-10 rounded-md py-4 px-2 text-lg font-medium outline-none"
                    placeholder="Search"
                />
            </div>
        </>
    );
};

export default SearchBar;