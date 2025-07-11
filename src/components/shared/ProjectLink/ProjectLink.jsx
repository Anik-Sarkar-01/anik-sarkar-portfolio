import React from 'react';

const ProjectLink = ({ href, icon, text }) => {
    return (
        <div>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#00ff99]"
            >
                {icon} {text}
            </a>
        </div>
    );
};

export default ProjectLink;