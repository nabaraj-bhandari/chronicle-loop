// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      {/* Introduction Section */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://random.imagecdn.app/200/200"
          alt="Profile"
          className="w-48 h-48 rounded-full shadow-md"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            Hi, I'm Nabaraj Bhandari, a passionate web developer specializing in
            building engaging and interactive web applications. I love crafting
            clean, user-friendly interfaces and learning new technologies.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {[
            { name: "HTML", icon: "⚪" },
            { name: "CSS", icon: "🔵" },
            { name: "JavaScript", icon: "🟡" },
            { name: "React", icon: "🔷" },
            { name: "Python", icon: "🐍" },
            { name: "C", icon: "🔤" },
            { name: "Node.js", icon: "🟢" },
            { name: "MongoDB", icon: "🍃" },
            { name: "Git", icon: "🔗" },
          ].map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-lg font-medium mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Frontend Developer</h3>
            <p className="text-gray-600 mb-2">Company ABC - 2022-2023</p>
            <p className="text-gray-700">
              Developed responsive web applications using React and Tailwind
              CSS.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Backend Developer</h3>
            <p className="text-gray-600 mb-2">Company XYZ - 2023-Present</p>
            <p className="text-gray-700">
              Built REST APIs using Node.js and MongoDB for scalable
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="relative group border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={`https://random.imagecdn.app/400/300`}
                alt={`Project ${project}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Project Title {project}
                </h3>
                <p className="text-gray-700">
                  This is a brief description of Project {project}. It
                  highlights the key features and technologies used.
                </p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
        <div className="overflow-x-auto whitespace-nowrap space-x-6 p-4">
          {[1, 2, 3].map((testimonial) => (
            <div
              key={testimonial}
              className="inline-block w-80 p-6 border rounded-lg shadow-md bg-white"
            >
              <p className="text-gray-700 mb-4">
                "This is a fantastic testimonial from a happy client or
                colleague. They loved working together!"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://random.imagecdn.app/50/50"
                  alt={`Person ${testimonial}`}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold">Person {testimonial}</h4>
                  <p className="text-sm text-gray-600">Role/Position</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
