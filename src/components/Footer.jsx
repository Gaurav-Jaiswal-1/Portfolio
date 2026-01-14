'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const socials = [
    { icon: Github, href: 'https://github.com/Gaurav-Jaiswal-1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gaurav-jaiswal-7004b025a/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/gaurav_jai81267', label: 'Twitter' },
    { icon: Mail, href: 'mailto:jaiswalgaurav863@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-cyan-500/20 bg-slate-950/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50" />
              <span className="font-semibold text-white">Gaurav Jaiswal</span>
            </div>
            <p className="text-gray-400 text-sm">
              AI Engineer & ML Architect specializing in production-grade intelligent systems.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-cyan-500/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm">
            © 2025 Gaurav Jaiswal. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed & Built with passion and precision
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
