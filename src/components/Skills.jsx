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
  FaJava,
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
  SiMysql,
  SiSpringboot,
} from 'react-icons/si';
import { TbBrandEmber } from 'react-icons/tb';

const Skills = () => {
  // Core Expertise
  const coreSkills = [
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  ];

  // Categorized Skills
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Ember.js', icon: TbBrandEmber, color: '#E04E39' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Redux', icon: SiRedux, color: '#764ABC' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
      ]
    },
    {
      title: 'Database',
      icon: '💾',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      ]
    },
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

          {/* Core Expertise Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Core Expertise
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="relative bg-gradient-to-br from-cyan-400/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-8 flex flex-col items-center justify-center gap-4 shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 cursor-pointer group border-2 border-cyan-400/30"
                >
                  {/* Featured Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
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

          {/* Categorized Skills Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white text-center mb-8">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{category.icon}</span>
                    <h4 className="text-xl font-bold text-white">{category.title}</h4>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                      >
                        <skill.icon
                          className="text-4xl transition-all duration-300 group-hover:scale-110"
                          style={{ color: skill.color }}
                        />
                        <span className="text-white font-medium text-sm text-center">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
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
