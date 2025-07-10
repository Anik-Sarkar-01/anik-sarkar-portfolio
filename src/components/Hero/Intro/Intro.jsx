import React from 'react';
import { FiDownload } from "react-icons/fi";
import { FlipWords } from '../../ui/FlipWords/FlipWords';
import { PointerHighlight } from '../../ui/PointerHighlight/PointerHighlight';

const Intro = () => {
    const words = ["Frontend Developer", "React Developer", "MERN Developer", "Web Enthusiast",];
    return (
        <div className='p-8 bg-[#0d1321] space-y-5 text-white rounded-xl'>
            <p>Hi there!</p>
            <h1 className='text-xl md:text-3xl lg:text-4xl'>I'm <span className='text-[#00ff99]'>Anik Sarkar</span>, a <PointerHighlight
                rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
                pointerClassName="text-green-500 h-3 w-3"
                containerClassName="inline-block ml-1"
            >
                <span className="relative z-10"><FlipWords words={words}></FlipWords></span>
            </PointerHighlight> crafting user-centric web interfaces.</h1>
            <button className='flex items-center gap-1 bg-[#00ff99] p-2 text-black rounded-lg'>Download Resume <FiDownload /> </button>
        </div>
    );
};

export default Intro;