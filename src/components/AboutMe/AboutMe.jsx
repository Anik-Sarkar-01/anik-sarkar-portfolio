import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import InfoCard from "../InfoCard/InfoCard";

const AboutMe = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/infoData.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);


  return (
    <section data-aos="fade-up" className="bg-[#0D1321] p-5 md:p-8 lg:p-10 text-white rounded-xl">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <Heading
          heading={"About Me"}
          subheading={"Turning Ideas into Responsive, Real-World Web Applications."}
        >
        </Heading>

        {/* Main Content */}
        <div className="space-y-5">
          {/* Bio */}
          <div className="space-y-4 text-gray-300 leading-loose">
            <p>
              I'm a Computer Science Graduate & <strong>Frontend Developer</strong> from Bangladesh. I love building user-friendly web applications. I specialize in using <strong className="text-white">React.js, TailwindCSS, Node.js, and MongoDB, JavaScript</strong> to create smooth web experiences.
            </p>

            <p>
              I thrive on solving real-world problems with clean, thoughtful code. I'm currently seeking opportunities where I can contribute meaningfully, learn from talented teams, and grow as a developer.
            </p>
          </div>

          {/* Highlights */}

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {data.map((item) => (
                <InfoCard key={item.id} title={item.title} items={item.items} />
              ))}
            </div>

          </div>

        </div>
      </div>

    </section>

  );
};

export default AboutMe;
