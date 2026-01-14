/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../components/data/Portfolio';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: portfolioData.personal.location,
      href: '#',
    },
  ];

  const socials = [
    { icon: Github, href: portfolioData.personal.social.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.personal.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: portfolioData.personal.social.twitter, label: 'Twitter' },
  ];

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg">
            Let's collaborate on exciting AI and ML projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={idx}
                    href={method.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all group"
                  >
                    <div className="p-3 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all">
                      <Icon size={20} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{method.label}</p>
                      <p className="text-white font-medium">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socials.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-white font-medium mb-2">Name</label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Email</label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Message</label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all cursor-pointer"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
