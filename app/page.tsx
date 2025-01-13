import Header from './components/Header'
import Hero from './components/Hero'
import Links from './components/Links'
import DownloadCV from './components/DownloadCV'
import Footer from './components/Footer'
import SEOMetadata from './components/SEOMetadata'
import AnimatedBackgroundWrapper from './components/AnimatedBackgroundWrapper'

export default function Home() {
  return (
    <>
      <SEOMetadata />
      <AnimatedBackgroundWrapper />
      <main className="min-h-screen scroll-smooth">
        <Header />
        <Hero />
        <Links />
        <DownloadCV />
        <Footer />
      </main>
    </>
  )
}

