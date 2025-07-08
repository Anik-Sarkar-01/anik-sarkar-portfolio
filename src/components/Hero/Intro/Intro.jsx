import React from 'react';
import { FiDownload } from "react-icons/fi";
import { ContainerTextFlip } from '../../ui/text-flip';


const Intro = () => {
    return (
        <div className='p-8 bg-[#0D1321] space-y-5 text-white rounded-xl'>
            <p>Hi there!</p>
            <h1 className='text-xl md:text-3xl'>I'm <span className='text-[#00ff99]'>Anik Sarkar</span>, a <ContainerTextFlip></ContainerTextFlip> crafting user-centric web interfaces.</h1>
            <button className='flex items-center gap-1 bg-[#00ff99] p-2 text-black rounded-lg'>Download Resume <FiDownload /> </button>
        </div>
    );
};

export default Intro;