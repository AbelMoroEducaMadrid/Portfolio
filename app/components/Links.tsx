import { Github, Linkedin, FileText } from 'lucide-react'

interface LinksProps {
  t: {
    connectWithMe: string;
    personal: string;
    fp: string;
    universidad: string;
  }
}

export default function Links({ t }: LinksProps) {
  const links = [
    { name: 'GitHub (' + t.personal + ')', url: 'https://github.com/HarkonG', icon: Github },
    { name: 'GitHub (' + t.fp + ')', url: 'https://github.com/AbelMoroEducaMadrid', icon: Github },
    { name: 'GitHub (' + t.universidad + ')', url: 'https://github.com/AbelMoro', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abel-moro-paje-244605340', icon: Linkedin },
    { name: 'Europass', url: 'https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/abel-moro+paje/06574dac-3a18-442d-933d-cad7e713bf63?view=html', icon: FileText },
  ]

  return (
    <section className="py-12 sm:py-20 px-6">
      <div className="content-box">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">{t.connectWithMe}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 w-full">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <link.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2" />
              <span className="text-xs sm:text-sm text-center">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

