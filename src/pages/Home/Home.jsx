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
        <>
            <div className='px-5 md:px-14 lg:px-28'>
                <div className='lg:fixed lg:top-0 lg:z-50 w-full lg:w-7xl'>
                    <Navbar></Navbar>
                </div>
                <div className=' space-y-14 lg:space-y-28 lg:pt-20'>
                    <Element name='home'>
                        <div className='flex flex-col md:flex-row gap-7'>
                            <SideBar></SideBar>
                            <div className='flex flex-col gap-7'>
                                <Intro></Intro>
                                <Canvas></Canvas>
                            </div>
                        </div>
                    </Element>
                    <Element name='aboutMe'>
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
        </>
    );
};

export default Home;