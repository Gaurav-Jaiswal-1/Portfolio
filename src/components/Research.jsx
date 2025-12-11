'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../components/data/Portfolio';
import { Lightbulb } from 'lucide-react';

export default function Research() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Research & Innovation
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-1 gap-8"
        >
          {portfolioData.research.map((paper, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8 group-hover:border-cyan-500/50 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                    <Lightbulb size={24} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {paper.title}
                    </h3>
                    <div className="flex gap-4 mb-4">
                      <span className="text-sm text-cyan-400 font-medium">{paper.status}</span>
                      <span className="text-sm text-gray-400">{paper.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{paper.description}</p>

                <motion.div
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {paper.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="flex gap-3 items-start pl-4 border-l border-cyan-500/30 hover:border-cyan-400/60 transition-all"
                    >
                      <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
