import React, { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("/projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className='bg-[#0D1321] text-white p-10'>
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                    My Projects
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