import React from 'react';
import { FiDownload } from "react-icons/fi";
import { BoxesCore } from '../../ui/background-boxs';


const Intro = () => {
    return (
        <div className='p-8 bg-[#0D1321] text-white rounded-xl relative overflow-hidden'>
            <BoxesCore></BoxesCore>
            <div className=' space-y-5 relative'>
                <p>Hi there!</p>
                <h1 className='text-xl md:text-3xl lg:text-4xl'>I'm <span className='text-[#00ff99]'>Anik Sarkar</span>, a Web Developer crafting user-centric web interfaces.</h1>
                <button className='flex items-center gap-1 bg-[#00ff99] p-2 text-black rounded-lg'>Download Resume <FiDownload /> </button>
            </div>
        </div>
    );
};

export default Intro;