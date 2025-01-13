import { Download } from 'lucide-react'

export default function DownloadCV() {
  return (
    <section className="py-12 sm:py-20 px-6 text-center">
      <a
        href="https://raw.githubusercontent.com/AbelMoroEducaMadrid/Portfolio/main/Abel%20Moro%20CV%20Espa%C3%B1ol.pdf"
        download
        className="button-box inline-flex items-center transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <Download className="w-5 h-5 mr-2" />
        Descargar CV
      </a>
    </section>
  )
}

