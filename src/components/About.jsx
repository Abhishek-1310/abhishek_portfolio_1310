import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <span className="text-white text-6xl font-bold">Photo</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-300 space-y-6"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Problem Solver & Code Enthusiast
              </h3>
              
              <p className="text-lg leading-relaxed">
                I'm a passionate software developer with a strong foundation in Data Structures and Algorithms.
                With expertise in JavaScript, Python, and modern web technologies, I love tackling challenging
                problems and building efficient, scalable solutions.
              </p>
              
              <p className="text-lg leading-relaxed">
                My GitHub repository showcases pattern-wise DSA implementations, IoT projects, and various
                full-stack applications. I believe in writing clean, well-documented code and continuously
                improving my problem-solving skills.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: 'GitHub Repositories', value: '35+' },
                  { label: 'Contributions', value: '89+' },
                  { label: 'DSA Problems Solved', value: '100+' },
                  { label: 'Technologies', value: '10+' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
