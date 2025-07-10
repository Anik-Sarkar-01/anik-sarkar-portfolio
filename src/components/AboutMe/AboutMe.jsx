import React from "react";
import "./AboutMe.css"
import { PointerHighlight } from "../ui/PointerHighlight/PointerHighlight";

const AboutMe = () => {
  return (
    <section className="bg-[#0D1321] p-5 md:p-8 lg:p-10 text-white rounded-xl">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            <PointerHighlight
              rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
              pointerClassName="text-green-500 h-3 w-3"
              containerClassName="inline-block ml-1"
            >
              <span className="relative z-10 p-3">About Me</span>
            </PointerHighlight>
          </h1>
          <p className="mt-3 text-gray-400 text-lg max-w-xl mx-auto">
            Turning Ideas into Responsive, Real-World Web Applications.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-5">
          {/* Bio */}
          <div className="space-y-4 text-gray-300 leading-loose">
            <p className="">
              I'm a passionate Frontend Developer from Bangladesh who loves building responsive and user-friendly web applications. I specialize in using <strong className="text-white">React.js, TailwindCSS, Node.js, and MongoDB, JavaScript</strong> to create smooth web experiences.
            </p>

            <p className="">
              I thrive on solving real-world problems with clean, thoughtful code. I'm currently seeking opportunities where I can contribute meaningfully, learn from talented teams, and grow as a developer.
            </p>
          </div>

          {/* Highlights */}

          <div className="space-y-6">
            <div className="bg-[#1A1F2E] custom-clippath p-5 rounded-lg border border-gray-700 hover:border-[#00ff99] transition">
              <h2 className="text-xl font-semibold text-[#00ff99]">Tech Stack</h2>
              <p className="text-gray-400 text-sm mt-2">
                React.js, Node.js, Express.js, MongoDB, Firebase, JavaScript, TailwindCSS, Git
              </p>
            </div>
            <div className="bg-[#1A1F2E] custom-clippath p-5 rounded-lg border border-gray-700 hover:border-[#00ff99] transition">
              <h2 className="text-xl font-semibold text-[#00ff99]">Currently Exploring</h2>
              <ul className="list-disc ml-5 text-gray-400 text-sm space-y-1 mt-2">
                <li>TypeScript - for type-safe React development</li>
                <li>Redux Toolkit - for efficient and scalable state management</li>
                <li>Framer Motion - for smooth, interactive animations</li>
              </ul>
            </div>

            <div className="bg-[#1A1F2E] custom-clippath p-5 rounded-lg border border-gray-700 hover:border-[#00ff99] transition">
              <h2 className="text-xl font-semibold text-[#00ff99]">Education</h2>
              <p className="text-sm text-gray-400 mt-2">
                B.Tech in <strong>Computer Science & Engineering</strong> <br />National Institute of Technology Silchar, India<br />
                <span className="italic">ICCR Scholar (2019–2023)</span>
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>

  );
};

export default AboutMe;
