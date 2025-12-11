'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "AI Engineer & ML Architect";
  const words = ["Deep Learning", "NLP", "MLOps", "GenAI"];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return fullText.slice(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(timer);
  }, [displayedText, isDeleting]);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(wordTimer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent opacity-50" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-medium">Welcome to my portfolio</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-7xl font-bold mb-6 text-white"
        >
          {displayedText}
          <span className="animate-pulse text-cyan-400">|</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Specializing in{' '}
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-cyan-400 font-semibold"
            >
              {words[wordIndex]}
            </motion.span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
        >
          Building production-grade AI systems that transform data into actionable intelligence. 95%+ accuracy. 80% efficiency gains.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
            View My Work
          </button>
          <button className="px-8 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all">
            Download Resume
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center gap-6 mb-12"
        >
          {['GitHub', 'LinkedIn', 'Twitter', 'Medium'].map((social, i) => (
            <motion.a
              key={social}
              href="#"
              whileHover={{ scale: 1.1, color: '#00d9ff' }}
              className="text-gray-500 hover:text-cyan-400 text-sm font-medium transition-colors"
            >
              {social}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ArrowDown className="text-cyan-400 opacity-50" size={24} />
        </motion.div>
      </div>
    </section>
  );
}
