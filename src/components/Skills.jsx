import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
  FaAws,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiDocker,
} from 'react-icons/si';

const Skills = () => {
  // Top/Featured Skills
  const topSkills = [
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  ];

  // Other Skills
  const otherSkills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <p className="text-gray-400 text-center text-lg mb-8 max-w-2xl mx-auto">
            These are the technologies I've worked with
          </p>

          {/* Top Skills Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Core Expertise
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {topSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="relative bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-lg rounded-xl p-8 flex flex-col items-center justify-center gap-4 shadow-2xl hover:shadow-primary/50 transition-all duration-300 cursor-pointer group border-2 border-primary/30"
                >
                  {/* Featured Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ Top
                  </div>
                  
                  <skill.icon
                    className="text-7xl transition-all duration-300 group-hover:scale-125 drop-shadow-lg"
                    style={{ color: skill.color }}
                  />
                  <span className="text-white font-bold text-xl">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Skills Section */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-300 text-center mb-6">
              Additional Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {otherSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <skill.icon
                    className="text-5xl transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                  <span className="text-white font-semibold text-base">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
              <p className="text-gray-300 text-lg">
                I'm constantly expanding my skill set through daily problem-solving on DSA platforms
                and exploring new technologies. Currently focused on mastering advanced algorithms,
                system design, and cloud computing with IoT integration.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
