import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Divide as Hamburger } from 'hamburger-react';
import GradientButton from '../shared/GradientButton/GradientButton';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const navLinks = (
        <>
            <li>
                <Link className='text-lg lg:text-xl' to="home" spy smooth offset={50} duration={500} onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li>
                <Link className='text-lg lg:text-xl' to="aboutMe" spy smooth offset={50} duration={500} onClick={() => setOpen(false)}>About</Link>
            </li>
            <li>
                <Link className='text-lg lg:text-xl' to="skills" spy smooth offset={50} duration={1000} onClick={() => setOpen(false)}>Skills</Link>
            </li>
            <li>
                <Link className='text-lg lg:text-xl' to="projects" spy smooth offset={50} duration={500} onClick={() => setOpen(false)}>Projects</Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-[#1A202C]/10 md:backdrop-blur-md text-white xl:ms-2">
            <div className="navbar-start gap-2">
                {/* Hamburger menu */}
                <div className="lg:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} color="#00FF99" size={30} />
                </div>
                <Link to="home" className="font-bold text-2xl md:text-3xl flex items-center gap-2">
                    <span>Anik</span>
                    <span className="w-3 h-3 bg-[#00FF99] rounded-full"></span>
                </Link>
            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="menu menu-sm bg-[#1A202C] absolute top-16 rounded-xl w-60 h-52 z-50 lg:hidden">
                    <ul>{navLinks}</ul>
                </div>
            )}

            {/* Desktop nav links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">{navLinks}</ul>
            </div>

            <div className="navbar-end">
                <Link to="contactMe" spy smooth offset={50} duration={500}>
                    <GradientButton buttonText={"Contact Me"}></GradientButton>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
