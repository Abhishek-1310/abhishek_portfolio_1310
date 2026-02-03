import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';

const Certifications = () => {
  const certifications = portfolioData.certifications;

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <FaAward className="text-6xl text-yellow-400" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Certifications & <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Achievements</span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Continuous learning and professional development through recognized certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10"
              >
                {/* Certificate Image - Compact */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <motion.img
                    src={cert.image}
                    // alt={cert.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-2"
                  />
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                      <span className="text-3xl">{cert.icon}</span>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm text-white font-semibold border border-white/30">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6">
                  {/* Issuer */}
                  <div className="mb-3">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Certificate Button */}
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-secondary hover:shadow-lg rounded-lg text-white text-sm font-semibold transition-all duration-200"
                  >
                    <FaCertificate /> View Certificate
                    <FaExternalLinkAlt className="text-xs" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '4+', label: 'Certifications' },
              { value: '100%', label: 'Completion Rate' },
              { value: '3+', label: 'Platforms' },
              { value: '2024', label: 'Latest Cert' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
