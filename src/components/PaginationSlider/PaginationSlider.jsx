import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './PaginationSlider.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const PaginationSlider = () => {
  const [projects, setProjects] = useState([]);

  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}">${index + 1}</span>`;
    }
  };

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      spaceBetween={20}
      className="mySwiper"
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
        1280: {slidesPerView: 3},
      }}
    >
      {projects.map((project, idx) => (
        <SwiperSlide className='mb-15' key={idx}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PaginationSlider;
