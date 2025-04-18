'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {
  CodeBracketIcon,
  CommandLineIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="inset-0 opacity-10 dark:opacity-5 z-50">
        <div className="inset-0 bg-[url('/grid.svg')] bg-repeat z-50"></div>
      </div>

      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left column - Text content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-tight">
                Hi, I'm{" "}
                <span className="underline decoration-wavy decoration-blue-400">
                  Alex
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl mt-4 text-gray-700 dark:text-gray-300 font-medium">
                Frontend Developer & UI Designer
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I create beautiful, responsive websites and applications...
            </motion.p>

            <motion.div
              className="grid md:flex flex-wrap gap-4 justify-center lg:justify-start z-[99999]"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="#projects" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-all duration-300">
                <CodeBracketIcon className="w-5 h-5" />
                View My Work
              </Link>
              <Link href="#contact" className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                <EnvelopeIcon className="w-5 h-5" />
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2 justify-center lg:justify-start mt-8"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {["React", "Next.js", "Tailwind", "Figma", "Node.js", "TypeScript"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
                  {skill === "React" && <CommandLineIcon className="w-4 h-4 text-blue-500" />}
                  {skill === "Figma" && <PaintBrushIcon className="w-4 h-4 text-pink-500" />}
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right column - Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="relative w-full max-w-lg aspect-square mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 blur-xl opacity-60"></div>
              <div className="relative rounded-2xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                <Image src="/portfolio.jpeg" alt="Profile photo" width={600} height={600} className="w-full h-full object-cover" priority />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link href="#projects">
            <ArrowDownIcon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
