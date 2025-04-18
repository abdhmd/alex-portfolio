'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CodeBracketIcon, EyeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart functionality, user authentication, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, drag-and-drop interface, and team features.",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with 5-day forecasts, location search, and animated weather icons.",
      tags: ["JavaScript", "API Integration", "CSS3"],
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 my-4 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,..."
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <a
                    href={project.demoUrl}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                  >
                    <EyeIcon className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
                  >
                    <CodeBracketIcon className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            View All Projects
            <ArrowTopRightOnSquareIcon className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
