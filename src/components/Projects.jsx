import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [

    {
      id: 1,
      title: 'NgCustomer',
      description: 'ng-customers is a customer management system demonstrating enterprise-level software architecture with a clean layered design (Model-Repository-Service-Controller-Validator-Builder-Resource-Constants), teaching you modular code organization, separation of concerns, design patterns (Repository, Builder, MVC), SOLID principles, and scalable application structure..',
      tech: ['Node.js', 'Typescript', 'JavaScript'],
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      github: 'https://github.com/Abhishek-1310/ng-customers',
      demo: 'https://github.com/Abhishek-1310/ng-customers',
    },
    {
      id: 2,
      title: 'power plant status',
      description: 'power-plant-status project is a serverless AWS backend application for real-time monitoring and management of power plant data. It is built with Node.js/JavaScript and demonstrates cloud-native architecture using AWS services with CloudFormation and AWS SAM (Serverless Application Model).',
      tech: ['aws', 'javascript', 'Dynomodb'],
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      github: 'https://github.com/Abhishek-1310/power-plant-status',
      demo: 'https://github.com/Abhishek-1310/power-plant-status',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React, Vite, and Tailwind CSS.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      github: 'https://github.com/Abhishek-1310/abhishek_portfolio_1310',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="text-gray-200 text-center text-lg mb-16 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-200 mb-4 max-h-28 overflow-y-auto pr-2 custom-scrollbar">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm text-gray-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors duration-200"
                    >
                      <FaGithub /> Code
                    </motion.a>
                    {/* <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary hover:shadow-lg rounded-lg text-white transition-all duration-200"
                    >
                      <FaExternalLinkAlt /> Demo
                    </motion.a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
