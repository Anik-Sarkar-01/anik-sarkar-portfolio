import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SideBar from '../../components/Hero/SideBar/SideBar';
import Intro from '../../components/Hero/Intro/Intro';
import Canvas from '../../components/Hero/Canvas/Canvas';
import AboutMe from '../../components/AboutMe/AboutMe';
import MySkills from '../../components/MySkills/MySkills';
import MyProjects from '../../components/MyProjects/MyProjects';


const Home = () => {
    return (
        <div className='px-5 md:px-14 lg:px-28'>
            <Navbar></Navbar>
            <div className='space-y-10 mt-3'>
               
                    <div className='flex flex-col md:flex-row gap-7'>
                        <SideBar></SideBar>
                        <div className='flex flex-col gap-7'>
                            <Intro></Intro>
                            <Canvas></Canvas>
                        </div>
                    </div>

                <div>
                    <AboutMe></AboutMe>
                </div>
                <div>
                    <MySkills></MySkills>
                </div>
                <div>
                    <MyProjects></MyProjects>
                </div>
            </div>
        </div>
    );
};

export default Home;