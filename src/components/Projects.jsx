import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'DSA Prep - Pattern-wise Solutions',
      description: 'Comprehensive collection of Data Structures and Algorithms problems solved pattern-wise with detailed notes and explanations.',
      tech: ['JavaScript', 'Algorithms', 'Two Pointer', 'Merge Intervals'],
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      github: 'https://github.com/Abhishek-1310/DSA-Prep-patternwise-dsa',
      demo: 'https://github.com/Abhishek-1310/DSA-Prep-patternwise-dsa',
    },
    {
      id: 2,
      title: 'IoT Cloud Lab',
      description: 'IoT-based cloud computing lab project showcasing integration of IoT devices with cloud platforms.',
      tech: ['IoT', 'Cloud Computing', 'Lab Projects'],
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      github: 'https://github.com/Abhishek-1310/IotCloudLab',
      demo: 'https://github.com/Abhishek-1310/IotCloudLab',
    },
    {
      id: 3,
      title: 'Python Programming Collection',
      description: 'Repository for beginners learning Python with practical examples and exercises.',
      tech: ['Python', 'Jupyter Notebook', 'Programming'],
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      github: 'https://github.com/Abhishek-1310/Python-Programming',
      demo: 'https://github.com/Abhishek-1310/Python-Programming',
    },
    {
      id: 4,
      title: 'First Website',
      description: 'My first web development project showcasing HTML, CSS fundamentals and responsive design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      github: 'https://github.com/Abhishek-1310/first-website',
      demo: 'https://github.com/Abhishek-1310/first-website',
    },
    {
      id: 5,
      title: 'Story - Creative Project',
      description: 'A creative masterpiece project using Jupyter Notebook for storytelling and data visualization.',
      tech: ['Jupyter Notebook', 'Python', 'Data Visualization'],
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      github: 'https://github.com/Abhishek-1310/story',
      demo: 'https://github.com/Abhishek-1310/story',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React, Vite, and Tailwind CSS.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      github: 'https://github.com/Abhishek-1310/Abhishek_portfolio',
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
          
          <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
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
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm text-gray-300"
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
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary hover:shadow-lg rounded-lg text-white transition-all duration-200"
                    >
                      <FaExternalLinkAlt /> Demo
                    </motion.a>
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
