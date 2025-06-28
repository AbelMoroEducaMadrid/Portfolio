"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Links from "./components/Links";
import DownloadCV from "./components/DownloadCV";
import Footer from "./components/Footer";
import SEOMetadata from "./components/SEOMetadata";
import AnimatedBackgroundWrapper from "./components/AnimatedBackgroundWrapper";
import translations from "./utils/translations";

export default function Home() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const t = translations[language];

  const handleLanguageChange = (newLang: "es" | "en") => {
    setLanguage(newLang);
  };

  return (
    <>
      <SEOMetadata />
      <AnimatedBackgroundWrapper />
      <main className="min-h-screen scroll-smooth">
        <Header t={t} onLanguageChange={handleLanguageChange} />
        <Hero t={t} />
        <Links t={t} />
        <DownloadCV t={t} />
        <Footer t={t} />
      </main>
    </>
  );
}
