"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import Image from "next/image";

interface LanguageSwitcherProps {
  onLanguageChange: (lang: "es" | "en") => void;
}

export default function LanguageSwitcher({
  onLanguageChange,
}: LanguageSwitcherProps) {
  const [currentLang, setCurrentLang] = useState<"es" | "en">("es");

  const toggleLanguage = () => {
    const newLang = currentLang === "es" ? "en" : "es";
    setCurrentLang(newLang);
    onLanguageChange(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-button transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center"
      aria-label={
        currentLang === "es" ? "Switch to English" : "Cambiar a Español"
      }
    >
      <Globe className="w-5 h-5 mr-2" aria-hidden="true" />
      <Image
        src={
          currentLang === "es"
            ? "/Portfolio/uk-flag.svg"
            : "/Portfolio/spain-flag.svg"
        }
        alt={currentLang === "es" ? "UK Flag" : "Spain Flag"}
        width={24}
        height={16}
        className="mr-2"
      />
      <span className="text-sm font-medium">
        {currentLang === "es" ? "EN" : "ES"}
      </span>
    </button>
  );
}
