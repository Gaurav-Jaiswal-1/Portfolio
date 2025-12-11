'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../components/data/Portfolio';
import { CheckCircle2 } from 'lucide-react';

export default function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-transparent" />

              <div className="absolute left-3 top-6 w-8 h-8 rounded-full bg-cyan-500 border-4 border-slate-950 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all" />

              <div className="ml-20 bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 group-hover:border-cyan-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium whitespace-nowrap"
                  >
                    {exp.duration}
                  </motion.span>
                </div>

                <motion.div
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="flex gap-3 items-start"
                    >
                      <CheckCircle2 size={20} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            className="group relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent to-cyan-500" />

            <div className="absolute left-3 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-slate-950" />

            <div className="ml-20 bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
              <p className="text-cyan-400 font-semibold">{portfolioData.education.degree}</p>
              <p className="text-gray-300">{portfolioData.education.school}</p>
              <p className="text-gray-400 text-sm mt-2">{portfolioData.education.duration}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
