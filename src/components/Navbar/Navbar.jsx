import React from 'react';
import { Link } from 'react-scroll';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
// import { BsRocketTakeoffFill } from "react-icons/bs";


const Navbar = () => {

    const navLinks = (
        <>
            <Link
                to="home"
                spy
                smooth
                offset={-40}
                duration={1000}
                activeClass='text-green-300'
            >
                <li className="group relative w-16 h-10 text-center">
                    <span className="group-hover:hidden">
                        <FaHome className='text-lg lg:text-xl xl:text-2xl xxl:text-3xl' />
                    </span>
                    <span className="text-[16px] hidden group-hover:inline">Home</span>
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
                        <FaUser className='text-lg lg:text-xl xl:text-2xl xxl:text-3xl' />
                    </span>
                    <span className="text-[16px] hidden group-hover:inline">About</span>
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
                        <FaCode className='text-lg lg:text-xl xl:text-2xl xxl:text-3xl'></FaCode>
                    </span>
                    <span className="text-[16px] hidden group-hover:inline">Skills</span>
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
                        <FaProjectDiagram className='text-lg lg:text-xl xl:text-2xl xxl:text-3xl'></FaProjectDiagram>
                    </span>
                    <span className="text-[16px] hidden group-hover:inline">Projects</span>
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
                        <FaPaperPlane className='text-lg lg:text-xl xl:text-2xl xxl:text-3xl'></FaPaperPlane>
                    </span>
                    <span className="text-[16px] hidden group-hover:inline">Contact</span>
                </li>
            </Link>
        </>
    );


    return (
        <>
            <div className="bg-[#1A202C]/10 rounded-tl-2xl rounded-tr-2xl fixed -bottom-2 z-50 xl:top-32 w-full xl:w-fit backdrop-blur-md text-white ">
                <ul className="menu menu-horizontal xl:menu-vertical px-1 text-lg items-center w-full xl:w-fit justify-around xl:gap-8">{navLinks}</ul>
            </div>
        </>
    );
};

export default Navbar;
