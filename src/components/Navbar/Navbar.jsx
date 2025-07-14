import React from 'react';
import { Link } from 'react-scroll';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
// import { BsRocketTakeoffFill } from "react-icons/bs";


const Navbar = () => {

    const navLinks = (
        <>
            <Link
                className="text-lg lg:text-xl"
                to="home"
                spy
                smooth
                offset={-40}
                duration={1000}
                activeClass='text-green-300'
            >
                <li className="group relative w-16 h-10 text-center">
                    <span className="group-hover:hidden">
                        <FaHome />
                    </span>
                    <span className="hidden group-hover:inline">Home</span>
                </li>
            </Link>
            <Link
                className="text-lg lg:text-xl"
                to="about"
                spy
                smooth
                offset={-40}
                duration={1000}
                activeClass='text-green-300'
            >
                <li className="group relative w-16 h-10 text-center">

                    <span className="group-hover:hidden">
                        <FaUser />
                    </span>
                    <span className="hidden group-hover:inline">About</span>
                </li>
            </Link>
            <Link
                className="text-lg lg:text-xl"
                to="skills"
                spy
                smooth
                offset={-40}
                duration={1000}
                activeClass='text-green-300'
            >
                <li className="group relative w-16 h-10 text-center">

                    <span className="group-hover:hidden">
                        <FaCode></FaCode>
                    </span>
                    <span className="hidden group-hover:inline">Skills</span>
                </li>
            </Link>
            <Link
                className="text-lg lg:text-xl"
                to="projects"
                spy
                smooth
                offset={-40}
                duration={1000}
                activeClass='text-green-300'
            >
                <li className="group relative w-16 h-10 text-center">

                    <span className="group-hover:hidden">
                        <FaProjectDiagram></FaProjectDiagram>
                    </span>
                    <span className="hidden group-hover:inline">Projects</span>
                </li>
            </Link>
            <Link
                className="text-lg lg:text-xl"
                to="contactMe"
                spy
                smooth
                offset={-40}
                duration={1000}
                activeClass='text-green-300'
            >
                <li className="group relative w-16 h-10 text-center">

                    <span className="group-hover:hidden">
                        <FaPaperPlane></FaPaperPlane>
                    </span>
                    <span className="hidden group-hover:inline">Contact</span>
                </li>
            </Link>
        </>
    );


    return (

        <>
            <div className=" bg-[#1A202C]/10 rounded-tl-2xl rounded-tr-2xl fixed -bottom-2 z-50 2xl:top-32 2xl:left-5 w-full 2xl:w-fit backdrop-blur-md text-white 2xl:ms-2">
                <ul className="menu menu-horizontal 2xl:menu-vertical px-1 text-lg items-center w-full 2xl:w-fit justify-around 2xl:gap-8">{navLinks}</ul>
            </div>
        </>
    );
};

export default Navbar;
