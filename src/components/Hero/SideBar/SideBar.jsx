import React from 'react';
import profilePic from "../../../assets/profile.jpg"
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";



const SideBar = () => {
    return (
        <div>
            <div className='w-[400px] h-[600px] bg-black text-white p-12 flex flex-col justify-center items-center space-y-2'>
                <img src={profilePic} alt="" />
                <h1 className='text-5xl font-semibold'>Anik Sarkar</h1>
                <p className='text-center'>I am a Web Developer based in Bangladesh.</p>
                <div className='flex gap-2 text-xl'>
                    <a href=""> <FaLinkedin/> </a>
                    <a href=""> <FaFacebook /> </a>
                    <a href=""> <FaGithub /> </a>
                </div>
            </div>

        </div>
    );
};

export default SideBar;