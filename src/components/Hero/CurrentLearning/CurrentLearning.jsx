import React from 'react';
import Marquee from "react-fast-marquee";
import reactLogo from "/icons/React-Dark.svg";
import nodeLogo from "/icons/NodeJS-Dark.svg";
import expressLogo from "/icons/ExpressJS-Dark.svg";
import mongoLogo from "/icons/MongoDB.svg";
import typescriptLogo from "/icons/TypeScript.svg"
import javascriptLogo from "/icons/JavaScript.svg"
import tailwindLogo from "/icons/TailwindCSS-Dark.svg"


const CurrentLearning = () => {
    return (
        <div className='bg-[#121214] text-white h-full p-10 space-y-8'>
            <p className='text-xl font-semibold'>Technologies I Know Best!</p>
            <Marquee autoFill={true} speed={20} pauseOnHover={true}>
                <div className='*:w-16 flex gap-5 ms-5'>
                    <img src={reactLogo} alt="" />
                    <img src={nodeLogo} alt="" />
                    <img src={expressLogo} alt="" />
                    <img src={mongoLogo} alt="" />
                    <img src={typescriptLogo} alt="" />
                    <img src={javascriptLogo} alt="" />
                    <img src={tailwindLogo} alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default CurrentLearning;