import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SideBar from '../../components/Hero/SideBar/SideBar';
import Intro from '../../components/Hero/Intro/Intro';
import Canvas from '../../components/Hero/Canvas/Canvas';
import AboutMe from '../../components/AboutMe/AboutMe';
import MySkills from '../../components/MySkills/MySkills';
import MyProjects from '../../components/MyProjects/MyProjects';
import { Element } from 'react-scroll';
import ContactMe from '../../components/ContactMe/ContactMe';
import Footer from '../../components/Footer/Footer';


const Home = () => {
    return (
        <div style={{
            backgroundColor: "#1A202C",
            backgroundImage: "radial-gradient(#2B2F3A 1px, #1A202C 1px)",
            backgroundSize: "20px 20px",
        }}>
            <div className='flex'>
                <Navbar></Navbar>
                <div className='space-y-14 lg:space-y-28 pt-3 px-5 xl:ps-16 w-full 2xl:w-[calc(100%-80px)] mx-auto'>
                    <Element name='home'>
                        <div className="font-bold text-2xl md:text-3xl flex items-center gap-2 text-white mb-2 ms-2">
                            <span>Anik</span>
                            <span className="w-3 h-3 bg-[#00FF99] rounded-full"></span>
                        </div>
                        <div className='flex flex-col md:flex-row gap-7'>
                            <div className='2xl:flex-1/4'>
                                <SideBar></SideBar>
                            </div>
                            <div className='flex 2xl:flex-2/3 flex-col gap-7'>
                                <Intro></Intro>
                                <Canvas></Canvas>
                            </div>
                        </div>
                    </Element>
                    <Element name='about'>
                        <div>
                            <AboutMe></AboutMe>
                        </div>
                    </Element>
                    <Element name="skills">
                        <div>
                            <MySkills></MySkills>
                        </div>
                    </Element>
                    <Element name='projects'>
                        <div>
                            <MyProjects></MyProjects>
                        </div>
                    </Element>
                    <Element name='contactMe'>
                        <div>
                            <ContactMe></ContactMe>
                        </div>
                    </Element>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;