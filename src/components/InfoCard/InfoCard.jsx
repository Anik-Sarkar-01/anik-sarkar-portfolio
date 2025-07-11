import React from "react";

const InfoCard = ({ title, items }) => {

    return (
        <div className="bg-[#1A1F2E] rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#00ff99] mb-4">{title}</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-white/80">
                {items.map((item, index) => (
                    <li key={index} className="leading-relaxed">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default InfoCard;
