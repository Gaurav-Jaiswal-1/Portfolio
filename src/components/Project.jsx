'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../components/data/Portfolio';
import { ArrowUpRight, Github } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {project.title}
                      </h3>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === idx ? 1 : 0 }}
                        className="flex gap-2"
                      >
                        <a href={project.github} className="p-2 rounded-full hover:bg-cyan-500/20">
                          <Github size={20} className="text-cyan-400" />
                        </a>
                      </motion.div>
                    </div>

                    <p className="text-gray-300 mb-6">{project.description}</p>

                    <p className="text-gray-400 text-sm mb-6">{project.longDescription}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-cyan-400" />
                          <span className="text-sm text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="hidden md:block"
                  >
                    <div className="relative w-full aspect-video rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center overflow-hidden group-hover:border-cyan-500/60 transition-all">
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
                      </div>
                      <div className="text-cyan-400 font-semibold flex flex-col items-center gap-2">
                        <span className="text-2xl">🚀</span>
                        <span className="text-sm">{project.title}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

