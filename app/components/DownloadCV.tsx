import { Download } from 'lucide-react'

interface DownloadCVProps {
  t: {
    downloadCV: string
  }
}

export default function DownloadCV({ t }: DownloadCVProps) {
  return (
    <section className="py-12 sm:py-20 px-6 text-center">
      <a
        href="https://raw.githubusercontent.com/AbelMoroEducaMadrid/Portfolio/main/Abel%20Moro%20CV%20Espa%C3%B1ol.pdf"
        download
        className="button-box inline-flex items-center px-8 py-4 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700"
      >
        <Download className="w-6 h-6 mr-2" />
        {t.downloadCV}
      </a>
    </section>
  )
}

