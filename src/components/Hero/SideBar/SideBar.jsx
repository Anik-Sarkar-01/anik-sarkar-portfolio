import React from 'react';
import profilePic from "../../../assets/images/profile.png";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import SocialLink from '../../shared/SocialLinks/SocialLink';

const SideBar = () => {

    return (
        <div className="flex h-full justify-center">
            <div className='w-full bg-[#0D1321] text-white p-12 flex flex-col justify-center items-center space-y-6 rounded-xl shadow-xl'>
                {/* Profile Image with Animated Ring */}
                <div className='w-60 h-60 relative flex items-center justify-center'>
                    <motion.svg
  className="absolute w-full h-full z-0"
  fill="transparent"
  viewBox="0 0 506 506"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Static base circle */}
  <circle
    cx="253"
    cy="253"
    r="200"
    stroke="#00ff99"
    strokeWidth="2"
    opacity="0.4"
  />

  {/* Expanding pulse wave 1 */}
  <motion.circle
    cx="253"
    cy="253"
    r="200"
    stroke="#00ff99"
    strokeWidth="2"
    initial={{ scale: 1, opacity: 0.8 }}
    animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
  />

  {/* Expanding pulse wave 2 (delayed for ripple effect) */}
  <motion.circle
    cx="253"
    cy="253"
    r="200"
    stroke="#00ff99"
    strokeWidth="2"
    initial={{ scale: 1, opacity: 0.8 }}
    animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
  />
</motion.svg>

                    <img
                        src={profilePic}
                        alt="Anik Sarkar"
                        className="w-56 h-56 rounded-full object-cover z-10 border-4 border-[#00ff99]"
                    />
                </div>


                {/* Name and Bio */}
                <h1 className='text-3xl font-bold text-center'>Anik Sarkar</h1>
                <div className='text-center text-gray-300'>
                    <TypeAnimation
                        sequence={['Web Enthusiast', 2000, 'MERN Developer', 2000, 'Frontend Developer', 2000, 'React Developer', 2000, 'Backend Developer', 2000]}
                        className='text-lg font-bold'
                        repeat={Infinity}
                        speed={30}
                    />
                </div>

                {/* Social Icons */}
                <div className='flex items-center justify-center gap-3 mt-2'>
                    <SocialLink
                        link={"https://www.linkedin.com/in/anik-sarkar-cs"}
                        icon={<FaLinkedin />}
                    >
                    </SocialLink>
                    <SocialLink
                        link={"https://github.com/Anik-Sarkar-01"}
                        icon={<FaGithub />}
                    >
                    </SocialLink>

                    <SocialLink
                        link={"https://www.facebook.com/beinganik.87"}
                        icon={<FaFacebook />}
                    >
                    </SocialLink>
                </div>
            </div>

        </div>
    );
};

export default SideBar;
