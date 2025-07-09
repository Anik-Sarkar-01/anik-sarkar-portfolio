import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const navLinks = <>
        <li>
            <Link to='home' spy={true}
                smooth={true}
                offset={50}
                duration={500} >Home</Link>
        </li>
        <li>
            <Link to='aboutMe' spy={true}
                smooth={true}
                offset={50}
                duration={500} >About</Link>
        </li>
        <li>
            <Link to='skills' spy={true}
                smooth={true}
                offset={50}
                duration={500} >Skills</Link>
        </li>
        <li>
            <Link to='projects' spy={true}
                smooth={true}
                offset={50}
                duration={500} >Projects</Link>
        </li>
        <li>
            <Link to="contacts" spy={true}
                smooth={true}
                offset={50}
                duration={500} >Contact</Link>
        </li>
    </>
    return (
        <div className="navbar bg-[#1A202C] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost font-extrabold text-3xl">
                    <p>Anik</p>
                    <div className='w-3 h-3 bg-[#00FF99] rounded-full'></div>
                </a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Hire Me</a>
            </div>
        </div>
    );
};

export default Navbar;