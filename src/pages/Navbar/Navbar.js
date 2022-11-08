import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Booking from '../Booking/Booking';
import Orders from '../Orders/Orders';
import logoLight from '../../assets/images/jo-logo.png';
import logoDark from '../../assets/images/jo-logo-dark.png';

const Navbar = () => {
    //change nav style when scroll
    const [navStyle, setNavStyle] = useState(false);
    const changeNavBg = () => {
        if(window.scrollY > 80) {
            setNavStyle(true);
        }
        else {
            setNavStyle(false);
        }
    }
    window.addEventListener('scroll', changeNavBg);
    //open close menu button on small screen
    const [smallMenu, setSmallMenu] = useState(false);
    const displayMenu = () => {
        if(smallMenu) {
            setSmallMenu(false);
        }
        else {
            setSmallMenu(true);
        }
    }

    return (
        <nav className={`navbar fixed top-0 z-50 flex items-start ${navStyle ? "bg-primary" : "bg-base"}`}>
            <div className="navbar-start">
                {/* Dropdown nav items for small screen */}
                <div className="dropdown">
                    <label tabIndex={0} onClick={displayMenu} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${navStyle ? "text-secondary" : "text-primary"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-48 ${smallMenu ? "block" : "hidden"}`}>
                        <li onClick={displayMenu} className='bg-secondary text-primary'><HashLink smooth to="/#home">Home</HashLink></li>
                        <li onClick={displayMenu} className='bg-secondary text-primary'><HashLink smooth to="/#menu">Menu</HashLink></li>
                    </ul>
                </div>
                {/* Logo display */}
                <Link className={`btn btn-ghost ${navStyle ? "" : "border-2 rounded-full md:border-primary lg:opacity-80 md:h-20 h-16"}`}>
                    <figure>
                        {
                            navStyle ?
                            <img src={logoDark} className="h-12" alt="" />
                            :
                            <img src={logoLight} className="md:h-16 h-12" alt="" />
                        }
                    </figure>
                </Link>
            </div>
            {/* Nav items for other screens */}
            <div className="navbar-center hidden md:flex">
                <ul className={`menu menu-horizontal font-otherNunito text-xl p-0 ${navStyle ? "text-secondary" : "text-primary"}`}>
                    <li className='hover:scale-125'><HashLink smooth to="/#home">Home</HashLink></li>
                    <li className='hover:scale-125'><HashLink smooth to="/#menu">Menu</HashLink></li>
                </ul>
            </div>
            <div className="navbar-end flex items-start">
                {/* Booking content */}
                <Booking navStyle={navStyle}></Booking>
                {/* Cart content */}
                <Orders  navStyle={navStyle}></Orders>
            </div>
        </nav>
    );
};

export default Navbar;