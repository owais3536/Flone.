import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { Search, UserRound, Heart, ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
    const [toggleLinks, setToggleLinks] = useState(false);

    function handleToggleLink() {
        setToggleLinks(prev => !prev);
        console.log("It worked!");
    }

    return (
        <header className='container mx-auto'>
            <div className='flex items-center justify-between border-b border-black'>
                <div className="hidden sm:flex items-center gap-6 py-3">
                    <span className='border-r border-slate-700 pr-3 text-sm'>English</span>
                    <span className='border-r border-slate-700 pr-3 text-sm'>USD</span>
                    <span className='text-sm'>Call us 12345</span>
                </div>
                <p className='block sm:inline-block w-full sm:w-fit text-sm text-center sm:text-end py-3'>
                    Free delivery on order over <span className='font-bold text-red-500'>$200</span>
                </p>
            </div>

            {/* mobile navbar */}
            <div
                className={`fixed md:hidden w-full h-full pointer-events-auto bg-black/20 z-10 
                ${toggleLinks ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            ></div>
            <nav className="flex items-center justify-between py-4">
                <h2 className='font-bold text-2xl'>Flone.</h2>

                <div
                    onClick={handleToggleLink}
                    className={`fixed md:hidden inset-0 bg-black/5 transition-all duration-150 ease-in-out z-10
                    ${!toggleLinks ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`
                    }></div>
                <ul
                    className={`fixed md:hidden top-0 max-w-[250px] w-full h-full transition-all duration-200 bg-white shadow-xl
                        z-20 px-5 py-15 ${!toggleLinks ? "-right-[250px]" : "right-0"}`}
                >
                    <li

                        className='absolute top-5 right-10'
                    >
                        <X onClick={handleToggleLink} />
                    </li>
                    <li className='py-3 block'>
                        <Link to="/" >Home</Link>
                    </li>
                    <li className='relative group py-3 block'>
                        Shop
                        <ul className='hidden group-hover:block absolute top-full bg-slate-100 w-30 px-2 py-2 z-10'>
                            <NavLink to="/mens">
                                <li className='py-3'>Men's</li>
                            </NavLink>
                            <NavLink to="/womens">
                                <li className='py-3'>Women's</li>
                            </NavLink>
                            <NavLink to="/kids">
                                <li className='py-3'>Kid's</li>
                            </NavLink>
                        </ul>
                    </li>
                    <li className='py-3 block'>Collection</li>
                    <li className='py-3 block'>About</li>
                    <li className='py-3 block'>Contact</li>
                </ul>

                <ul
                    className="hidden md:flex items-center gap-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='relative group'>
                        Shop
                        <ul className='hidden group-hover:block absolute top-full bg-slate-100 w-30 px-2 py-2 z-10'>
                            <NavLink to="/mens">
                                <li className='py-3'>Men's</li>
                            </NavLink>
                            <NavLink to="/womens">
                                <li className='py-3'>Women's</li>
                            </NavLink>
                            <NavLink to="/kids">
                                <li className='py-3'>Kid's</li>
                            </NavLink>
                        </ul>
                    </li>
                    <li>Collection</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <ul className="flex items-center gap-3">
                    <li className='cursor-pointer'>
                        <Search width={20} />
                    </li>
                    <li className='cursor-pointer'>
                        <UserRound width={20} />
                    </li>
                    <li className='cursor-pointer'>
                        <Heart width={20} />
                    </li>
                    <li className='cursor-pointer relative'>
                        <ShoppingBag width={20} />
                        <span
                            className='absolute -top-2 -right-2 bg-black text-white w-4 h-5 text-sm 
                            rounded-full text-center'
                        >
                            0
                        </span>
                    </li>
                    <li className='cursor-pointer md:hidden' onClick={handleToggleLink}>
                        <Menu width={20} />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar