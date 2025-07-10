import React, { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { PointerHighlight } from '../ui/PointerHighLight/PointerHighLight';


const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("/projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className='bg-[#0D1321] text-white p-5 md:p-8 lg:p-10 rounded-xl'>
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold">
                    <PointerHighlight
                        rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
                        pointerClassName="text-green-500 h-3 w-3"
                        containerClassName="inline-block ml-1"
                    >
                        <span className="relative z-10 p-3">My Projects</span>
                    </PointerHighlight>
                </h1>
                <p className="mt-2 text-gray-400">
                    From concept to deployment — here's what I've created.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </div>
        </div>
    );
};

export default MyProjects;