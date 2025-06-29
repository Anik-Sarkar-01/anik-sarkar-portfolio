import React, { useEffect, useState } from 'react';
import SkillCard from '../SkillCard/SkillCard';

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
        "Familiar"
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
        <div className='bg-[#121214] text-white p-10'>
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-green-400 font-mono">
                    function mySkills()
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
                            ? "bg-[#05DF72] text-black"
                            : "bg-[#121214] border-gray-600"
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