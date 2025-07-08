import React from 'react';
import { FiDownload } from "react-icons/fi";



const Intro = () => {
    return (
        <div className='p-8 bg-[#121214] text-white space-y-5 rounded-xl'>
            <p>Hi there!</p>
            <h1 className='text-xl md:text-3xl lg:text-4xl'>I'm <span className='text-[#00ff99]'>Anik Sarkar</span>, a Web Developer crafting user-centric web interfaces.</h1>
            <button className='flex items-center gap-1 bg-[#00ff99] p-2 text-black rounded-lg'>Download Resume <FiDownload /> </button>
        </div>
    );
};

export default Intro;