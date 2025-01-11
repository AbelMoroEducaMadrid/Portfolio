'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import translations from '../utils/translations'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-12 sm:py-20 px-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-10 z-0">
        <pre className="text-xs sm:text-sm lg:text-base overflow-hidden h-full">
          {`function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

const technologies = [
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'Git'
];

technologies.forEach(tech => {
  console.log(\`I love working with \${tech}!\`);
});`}
        </pre>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 mb-8 md:mb-0 z-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          {t.description}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-2/3 md:w-1/3 z-10"
      >
        <Image
          src="/placeholder.svg"
          alt="Your Name"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  )
}

