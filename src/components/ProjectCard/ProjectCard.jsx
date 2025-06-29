import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaServer } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    techStack,
    image,
    githubClient,
    githubServer,
    live
  } = project;

  return (
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover border-b border-gray-700"
      />

      <div className="p-5 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>

        <p className="text-sm text-gray-400">{description}</p>

        <div className="flex flex-wrap gap-2 text-xs">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2 text-white text-sm">
          {githubClient && (
            <a
              href={githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-green-400"
            >
              <FaGithub /> Client
            </a>
          )}

          {githubServer && (
            <a
              href={githubServer}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-green-400"
            >
              <FaServer /> Server
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-green-400"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
