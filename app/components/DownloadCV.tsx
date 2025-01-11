import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import translations from '../utils/translations'

export default function DownloadCV() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-12 sm:py-20 px-6 text-center">
      <motion.a
        href="https://github.com/yourusername/cv/raw/main/YourName_CV.pdf"
        download
        className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="w-5 h-5 mr-2" />
        {t.downloadCV}
      </motion.a>
    </section>
  )
}

