import React, { useEffect, useState } from 'react';
import SkillCard from '../SkillCard/SkillCard';
import { PointerHighlight } from '../ui/PointerHighLight';

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
        <div className='bg-[#0D1321] text-white p-5 md:p-8 lg:p-10 rounded-xl'>
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold">
                    <PointerHighlight
                        rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
                        pointerClassName="text-green-500 h-3 w-3"
                        containerClassName="inline-block ml-1"
                    >
                        <span className="relative z-10 p-3">My Skills</span>
                    </PointerHighlight>
                </h1>
                <p className="mt-2 text-gray-400">
                    Every tag, function, and API call — these are my tools.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center pt-7'>
                {categories.map((category, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleClick(category)}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${activeCategory === category
                            ? "bg-[#00ff99] text-black"
                            : "bg-gray-700 border-gray-600"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-10'>
                {
                    mySkills && mySkills.map((skill, idx) => <SkillCard key={idx} skill={skill}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default MySkills;