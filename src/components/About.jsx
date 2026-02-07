import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const getExperienceInYears = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();

    const totalMonths =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth());

    return (totalMonths / 12).toFixed(1);
  };

  const yearsExp = getExperienceInYears("2023-09-01");
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

          {/* Two Column Layout: Photo + Stats (Left) | Description + Key Expertise (Right) */}
          <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            {/* Left Column: Photo and Stats Vertically Stacked */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 flex flex-col items-center justify-center"
            >
              {/* Photo Section */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10">
                <div className="w-full aspect-[3/4] max-w-xs mx-auto bg-gradient-to-br from-cyan-400 to-pink-500 rounded-xl overflow-hidden">
                  <img
                    src="/dp.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="h-4"></div>

              {/* Stats Section - Vertical List */}
              <div className="w-full flex flex-col items-center gap-4">
                {[
                  { label: 'Years Experience', value: `${yearsExp}+`, icon: '💼' },
                  { label: 'AWS Certifications', value: '3', icon: '☁️' },
                  { label: 'CGPA', value: '9.45', icon: '🎓' },
                  { label: 'Technologies', value: '15+', icon: '⚡' },
                  { label: 'Ideathon Wins', value: '3', icon: '🏅' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-cyan-400/50 transition-all flex items-center gap-4 w-full max-w-xs"
                  >
                    <div className="text-3xl">{stat.icon}</div>
                    <div className="flex-1">
                      <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-200 font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Description + Key Expertise */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Description */}
              <div className="text-gray-200 space-y-4">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Dynamic Full Stack Developer
                </h3>

                <p className="text-base leading-relaxed">
                  Driving impactful solutions at <span className="text-white font-semibold">Cognizant</span> on the <span className="text-cyan-400">Centrica energy/utility project</span>.
                  Excelled with <span className="text-pink-400 font-semibold">9.45 GPA</span> in Computer Science, now blending React/Node.js expertise,
                  AWS cloud architecture, TypeScript, Node.js backend prowess to deliver scalable applications.
                </p>

                <p className="text-base leading-relaxed">
                  Fast learner tackling <span className="text-white font-semibold">DSA challenges</span> daily, <span className="text-cyan-400">Guinness-certified AI hackathon participant</span>,
                  and eager to pioneer <span className="text-pink-400 font-semibold">Generative AI</span> technologies for forward-thinking teams.
                </p>
              </div>

              {/* Key Expertise */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-3xl">🎯</span>
                  Key Expertise
                </h4>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-xl">▹</span>
                    <div>
                      <span className="font-semibold text-white block mb-1">Technologies</span>
                      <span className="text-sm">React, Node.js/TypeScript/JavaScript, Java, AWS (Lambda, EC2, S3)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-xl">▹</span>
                    <div>
                      <span className="font-semibold text-white block mb-1">Experience</span>
                      <span className="text-sm">2+ years as Program Analyst at Cognizant (Centrica project)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-xl">▹</span>
                    <div>
                      <span className="font-semibold text-white block mb-1">Achievements</span>
                      <span className="text-sm">3 AWS certifications, Guinness certificate for Generative AI hackathon, 9.45 GPA</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-xl">▹</span>
                    <div>
                      <span className="font-semibold text-white block mb-1">Passions</span>
                      <span className="text-sm">Daily DSA practice, coding innovation, exploring GenAI frontiers</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Additional Highlights */}
              <div className="bg-gradient-to-br from-cyan-400/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 shadow-xl">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  Highlights
                </h4>
                <div className="space-y-3 text-gray-200 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-pink-400">✓</span>
                    <span>AWS Cloud Practitioner Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-pink-400">✓</span>
                    <span>AWS Developer Associate Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-pink-400">✓</span>
                    <span>AWS AI Practitioner Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-pink-400">✓</span>
                    <span>Guinness Record - AI Hackathon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-pink-400">✓</span>
                    <span>Top Performer - 9.45 CGPA</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
