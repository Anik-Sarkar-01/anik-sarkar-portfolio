import React from 'react';
import { HoverBorderGradient } from '../../ui/HoverBorderGradient/HoverBorderGradient';

const SocialLink = ({link, icon}) => {
    return (
        <div>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <HoverBorderGradient containerClassName="rounded-xl" as="button" className="btn border-none">
                    <div className="hover:text-[#00ff99] transition duration-200 text-xl">
                        {icon}
                    </div>
                </HoverBorderGradient>
            </a>
        </div>
    );
};

export default SocialLink;