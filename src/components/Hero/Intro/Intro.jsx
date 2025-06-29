import React from 'react';
import { FiDownload } from "react-icons/fi";



const Intro = () => {
    return (
        <div className='p-10 bg-black text-white space-y-5'>
            <p>Hi there!</p>
            <h1 className='text-4xl'>I'm Anik Sarkar, a web developer crafting user-centric web interfaces with pixel-perfect precision.</h1>
            <div className='flex items-center gap-3'>
                <div aria-label="success" className="status status-success"></div>  
                <p>Available for Hiring</p>
            </div>
            <button className='flex items-center gap-1 bg-[#EB5D3B] p-2'>Download Resume <FiDownload /> </button>
        </div>
    );
};

export default Intro;