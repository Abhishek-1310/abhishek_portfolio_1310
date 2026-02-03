import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Programming Analyst",
            company: "Cognizant",
            type: "Full-time",
            location: "Hyderabad, Telangana, India",
            locationType: "Hybrid",
            duration: "Sep 2024 - Present",
            period: "1 yr 6 mos",
            description: "Working with Ember.js and TypeScript to develop and maintain enterprise applications.",
            skills: ["Ember.js", "TypeScript"],
            current: true
        },
        {
            id: 2,
            title: "Program Analyst Trainee",
            company: "Cognizant",
            type: "Full-time",
            location: "India",
            locationType: "Hybrid",
            duration: "Sep 2023 - Sep 2024",
            period: "1 yr 1 mo",
            description: "Gained hands-on experience in full-stack development and enterprise software solutions.",
            skills: ["JavaScript", "Node.js", "React", "MongoDB", "Express.js", "SQL"],
            current: false
        },
        {
            id: 3,
            title: "Full Stack Java Developer",
            company: "Cognizant",
            type: "Internship",
            location: "Hyderabad, Telangana, India",
            locationType: "On-site",
            duration: "Jan 2023 - Jun 2023",
            period: "6 mos",
            description: "Developed full-stack applications using Java technologies and modern web frameworks.",
            skills: ["Java", "Spring Boot", "SQL", "HTML", "CSS", "JavaScript"],
            current: false
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="experience" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
                        Work <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Experience</span>
                    </h2>
                    <p className="text-gray-400 text-center text-lg mb-12">
                        My professional journey and roles
                    </p>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    {/* Left Side - Main Info */}
                                    <div className="flex-1">
                                        <div className="flex items-start gap-4">
                                            {/* Company Logo Placeholder */}
                                            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FaBriefcase className="text-white text-xl md:text-2xl" />
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-lg text-gray-300 mb-2">
                                                    {exp.company} · {exp.type}
                                                </p>

                                                {/* Duration & Location */}
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                                                    <div className="flex items-center gap-2">
                                                        <FaCalendarAlt className="text-cyan-400" />
                                                        <span>{exp.duration}</span>
                                                        <span className="text-gray-500">·</span>
                                                        <span>{exp.period}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <FaMapMarkerAlt className="text-pink-400" />
                                                        <span>{exp.location}</span>
                                                        <span className="text-gray-500">·</span>
                                                        <span>{exp.locationType}</span>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-gray-300 mb-4">
                                                    {exp.description}
                                                </p>

                                                {/* Skills */}
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.skills.map((skill, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-cyan-400/50 transition-colors"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side - Current Badge */}
                                    {exp.current && (
                                        <div className="flex-shrink-0">
                                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400 to-pink-500 text-white text-sm font-semibold rounded-full">
                                                Current Role
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Total Experience Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <div className="inline-block bg-gradient-to-r from-cyan-400/20 to-pink-500/20 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/10">
                            <p className="text-gray-300 text-lg">
                                Total Experience at Cognizant:{" "}
                                <span className="font-bold text-white text-xl">2 years 6 months</span>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
