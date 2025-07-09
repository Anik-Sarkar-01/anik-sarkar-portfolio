import React from 'react';

const SkillCard = ({ skill }) => {

    const { name, progress, icon } = skill;

    return (
            <div className="bg-[#1A1F2E] rounded-xl p-4 border border-gray-700 hover:border-[#00ff99] transition-all duration-300">
                    <div className="flex flex-col  items-center  gap-3 mb-3">
                    {icon && (
                        <img src={icon} alt={name} className="w-6 h-6 object-contain" />
                    )}
                    <h3 className="text-white text-md font-semibold">{name}</h3>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div
                        className="bg-[#00ff99] h-2 transition-all duration-1000 ease-in-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="text-right text-xs text-gray-400 mt-1">
                    {progress}%
                </div>
            </div>
    );
};

export default SkillCard;
