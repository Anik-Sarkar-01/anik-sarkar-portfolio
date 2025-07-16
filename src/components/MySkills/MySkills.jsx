import React, { useEffect, useState } from 'react';
import SkillCard from '../SkillCard/SkillCard';
import { PointerHighlight } from '../ui/PointerHighlight/PointerHighlight';
import Heading from '../Heading/Heading';
import GradientButton from '../shared/GradientButton/GradientButton';
import { HoverBorderGradient } from '../ui/HoverBorderGradient/HoverBorderGradient';

const MySkills = () => {

    const [originalSkills, setOriginalSkills] = useState([]);
    const [mySkills, setMySkills] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");


    useEffect(() => {
        fetch("/skills.json")
            .then(res => res.json())
            .then(data => {
                setOriginalSkills(data);
                setMySkills(data);
            });
    }, []);

    const categories = [
        "All",
        "Frontend",
        "Backend & Database",
        "Tools & Platforms",
        "Familiar",
    ];


    const handleClick = (category) => {
        if (category === "All") {
            setActiveCategory(category);
            setMySkills(originalSkills);
        } else {
            const filtered = originalSkills.filter(item => item.category === category);
            setActiveCategory(category);
            setMySkills(filtered);
        }
    };


    return (
        <div data-aos="fade-up" className='bg-[#0D1321] text-white p-5 md:p-8 lg:p-10 rounded-xl'>
            <Heading
                heading={"My Skills"}
                subheading={"Every tag, function, and API call — these are my tools."}
            >
            </Heading>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center justify-center pt-7'>
                {categories.map((category, idx) => (
                        <HoverBorderGradient
                            key={idx}
                            onClick={() => handleClick(category)}
                            className={`${activeCategory === category
                                ? "bg-[#00ff99] text-black"
                                : ""
                                }`}
                        >
                            {category}
                        </HoverBorderGradient>

                ))}
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 pt-10'>
                {
                    mySkills && mySkills.map((skill, idx) => <SkillCard key={idx} skill={skill}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default MySkills;