import { motion } from 'framer-motion'
import { Github, Linkedin, FileText } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import translations from '../utils/translations'

const links = [
  { name: 'GitHub 1', url: 'https://github.com/yourusername1', icon: Github },
  { name: 'GitHub 2', url: 'https://github.com/yourusername2', icon: Github },
  { name: 'GitHub 3', url: 'https://github.com/yourusername3', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  { name: 'Europass', url: 'https://europa.eu/europass/en', icon: FileText },
]

export default function Links() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-12 sm:py-20 px-6">
      <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">{t.connectWithMe}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <link.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2" />
            <span className="text-xs sm:text-sm text-center">{link.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

