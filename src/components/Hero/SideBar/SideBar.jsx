import React from 'react';
import profilePic from "../../../assets/profile.png";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SideBar = () => {
    return (
        <div className="flex justify-center p-4">
            <div className='w-fit lg:w-[400px] h-auto bg-[#121214] text-white p-12 flex flex-col justify-center items-center space-y-6 rounded-xl shadow-xl relative'>

                {/* Profile Image with Animated Ring */}
                <div className='w-60 h-60 relative flex items-center justify-center'>
                    <motion.svg
                        className="absolute w-full h-full z-0"
                        fill="transparent"
                        viewBox="0 0 506 506"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.circle
                            cx="253"
                            cy="253"
                            r="250"
                            stroke="#00ff99"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            animate={{
                                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                                repeatType: 'mirror'
                            }}
                        />
                    </motion.svg>

                    <img
                        src={profilePic}
                        alt="Anik Sarkar"
                        className="w-52 h-52 rounded-full object-cover z-10 border-4 border-[#00ff99]"
                    />
                </div>

                {/* Name and Bio */}
                <h1 className='text-3xl font-bold text-center'>Anik Sarkar</h1>
                <p className='text-center text-gray-300'>I am a Web Developer based in Bangladesh.</p>

                {/* Social Icons */}
                <div className='flex gap-6 text-2xl mt-2'>
                    <a
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="hover:text-[#00ff99] transition duration-200" />
                    </a>
                    <a
                        href="https://www.facebook.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <FaFacebook className="hover:text-[#00ff99] transition duration-200" />
                    </a>
                    <a
                        href="https://github.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub className="hover:text-[#00ff99] transition duration-200" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
