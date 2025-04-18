'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FaTwitter, FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 my-4 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Email</h4>
                    <a href="mailto:hello@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      hello@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Phone</h4>
                    <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400 hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition">
                  <FaTwitter size={28} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
                  <FaGithub size={28} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:hover:text-blue-400 transition">
                  <FaLinkedin size={28} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 dark:hover:text-pink-400 transition">
                  <FaDribbble size={28} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-gray-900 dark:text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
