import React from 'react';
import Heading from '../Heading/Heading';
import PaginationSlider from '../PaginationSlider/PaginationSlider';

const MyProjects = () => {
  return (
    <div className="bg-[#0D1321] text-white p-5 md:p-8 lg:p-10 rounded-xl">
      <Heading
        heading="My Projects"
        subheading="From concept to deployment — here's what I've created."
      />
      
      <PaginationSlider />
    </div>
  );
};

export default MyProjects;
