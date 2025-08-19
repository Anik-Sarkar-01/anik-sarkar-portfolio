import React from 'react';
import { PointerHighlight } from '../../ui/PointerHighlight/PointerHighlight';
import GradientButton from '../../shared/GradientButton/GradientButton';
import { FaDownload } from "react-icons/fa6";



const Intro = () => {
    const resumeLink = "https://drive.google.com/file/d/17BomlV3jIbmxSsco2i9tTJloNPwvC3Jf/view";
    return (
        <div className='p-8 bg-[#0d1321] space-y-5 text-white rounded-xl'>
            <p>Hi there!</p>
            <h1 className='text-lg md:text-2xl lg:text-4xl'>I'm <span className='text-[#00ff99]'>Anik Sarkar</span>, a <PointerHighlight
                rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
                pointerClassName="text-green-500 h-3 w-3"
                containerClassName="inline-block ml-1"
            >
                <span className='relative z-10 p-2'>Web Enthusiast</span>
            </PointerHighlight> crafting user-centric web interfaces.</h1>
            <GradientButton href={resumeLink} icon={<FaDownload/>} buttonText="Download Resume">
            </GradientButton>
        </div>
    );
};

export default Intro;