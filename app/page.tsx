import ClientWrapper from './components/ClientWrapper'
import Header from './components/Header'
import Hero from './components/Hero'
import Links from './components/Links'
import DownloadCV from './components/DownloadCV'
import Footer from './components/Footer'

export default function Home() {
  return (
    <ClientWrapper>
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <Links />
        <DownloadCV />
        <Footer />
      </main>
    </ClientWrapper>
  )
}