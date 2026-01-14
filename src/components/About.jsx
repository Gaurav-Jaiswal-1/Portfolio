/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../components/data/Portfolio';
import { Brain, Code2, Zap } from 'lucide-react';
import Image from 'next/image';

export default function About() {
const stats = [
  { icon: Code2, label: 'Production Pipelines', value: '3+' },
  { icon: Brain, label: 'AI', value: '8+' },
  { icon: Zap, label: 'PyPI Downloads', value: '13k+' },
];


  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden border border-cyan-500/30 group bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                
                <Image
                  src="/me.jpg"
                  alt="Gaurav Jaiswal - AI Engineer"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {portfolioData.personal.bio}
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-8">
              I'm currently working as a Data Science Intern at Ellipsis, where I engineer production-grade OCR pipelines and multimodal AI systems. My research focuses on advancing deep learning architectures, with ongoing work on the HyperX activation function.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Beyond my professional work, I'm passionate about democratizing AI through open-source contributions—my Text-Preprocessing-Toolkit has been downloaded over 12,000 times on PyPI. I believe in building intelligent systems that are not only accurate but also responsible, efficient, and accessible.
            </p>

            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-center hover:border-cyan-500/60 transition-all"
                  >
                    <Icon size={24} className="text-cyan-400 mx-auto mb-2" />
                    <p className="text-white font-bold text-lg">{stat.value}</p>
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
