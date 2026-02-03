import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowNarrowDown } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <motion.h2
              className="text-gray-300 text-xl md:text-2xl mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, my name is
            </motion.h2>
            
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Abhishek Kumar Yadav
            </motion.h1>
            
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Software Developer & DSA Enthusiast
            </motion.h2>
            
            <motion.p
              className="text-gray-400 text-lg md:text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Passionate about solving complex problems through code.
              Specialized in Data Structures & Algorithms, JavaScript, and building efficient solutions.
            </motion.p>

            <motion.div
              className="flex gap-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { Icon: FaGithub, href: 'https://github.com/Abhishek-1310' },
                { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/abhishek-kumar-yadav-b04913202' },
                { Icon: FaTwitter, href: '#' },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Icon size={35} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Gradient Background Blob */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Decorative Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary p-1"
                >
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </motion.div>
                
                {/* Profile Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  {/* Placeholder overlay - Remove this when you add your image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-2">👤</div>
                      <p className="text-sm">Add your photo</p>
                      <p className="text-xs text-gray-200 mt-1">as /public/profile.jpg</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-xl"
                >
                  <span className="text-3xl">💻</span>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-xl"
                >
                  <span className="text-3xl">🚀</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 text-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <HiArrowNarrowDown className="text-gray-400 mx-auto" size={40} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
