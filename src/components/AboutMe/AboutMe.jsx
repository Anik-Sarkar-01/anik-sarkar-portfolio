import React, { useEffect, useState } from 'react';

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState([]);

  useEffect(() => {
    fetch("/aboutme.json")
      .then(res => res.json())
      .then(data => setAboutMe(data));
  }, []);

  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-400 font-mono">
            function AboutMe()
          </h1>
          <p className="mt-2 text-gray-400">
            Turning ideas into interactive experiences using modern web technologies.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side – Bio */}
          <div className="flex-1 text-justify text-gray-200 leading-relaxed space-y-4">
            <p>
              I'm a frontend developer dedicated to building clean, responsive, and user-centric web applications.
              With expertise in React.js, JavaScript, and TailwindCSS, I focus on delivering seamless user experiences and maintainable code.
              My skills extend to backend technologies like Node.js, Express.js, and MongoDB, enabling me to contribute to full-stack solutions when needed.
            </p>
            <p>
              Over time, I've independently built and deployed several real-world applications, including a role-based blood donation platform,
              a feature-rich blogging system, and a dynamic crowdfunding platform. I developed these projects outside of my academic curriculum,
              applying modern tools and best practices in authentication, state management, UI performance, and deployment.
            </p>
          </div>

          {/* Right Side – Dynamic Feature Cards */}
          <div className="flex-1 grid gap-5">
            {aboutMe.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-700 p-5 rounded-lg bg-[#1a1a1a] hover:border-green-400 transition-all"
              >
                <h2 className="text-xl font-semibold text-green-400 mb-2">{item.title}</h2>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
