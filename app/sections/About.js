'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { UserIcon, LightBulbIcon, CogIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skills = [
    { name: 'Frontend Development', level: 90, icon: <CogIcon className="w-5 h-5" /> },
    { name: 'UI/UX Design', level: 85, icon: <LightBulbIcon className="w-5 h-5" /> },
    { name: 'Backend Integration', level: 75, icon: <PuzzlePieceIcon className="w-5 h-5" /> },
    { name: 'Mobile Development', level: 65, icon: <UserIcon className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left column - Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-md aspect-square mx-auto">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30"></div>
              <div className="relative rounded-2xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-lg">
                <Image
                  src="/portfolio.jpeg" // Replace with your about image
                  alt="About me"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right column - Text content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                About <span className="text-blue-600 dark:text-blue-400">Me</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 my-4"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I'm a passionate developer with 5+ years of experience creating digital experiences 
                that users love. My journey in tech started when I built my first website at 15, and 
                I've been hooked ever since.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                My Skills & Expertise
              </h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">
                        {skill.icon}
                      </span>
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="pt-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                When I'm not coding, you can find me hiking in the mountains, experimenting with 
                photography, or contributing to open source projects. I believe in continuous learning 
                and pushing the boundaries of what's possible with technology.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Let's Work Together
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}