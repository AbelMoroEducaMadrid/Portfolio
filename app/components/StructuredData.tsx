export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abel Moro Paje",
    jobTitle: "Desarrollador de Software Junior",
    url: "https://abelmoroeducamadrid.github.io/Portfolio/",
    sameAs: [
      "https://github.com/HarkonG",
      "https://github.com/AbelMoroEducaMadrid",
      "https://github.com/AbelMoro",
      "https://www.linkedin.com/in/abel-moro-paje-244605340",
      "https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/abel-moro+paje/06574dac-3a18-442d-933d-cad7e713bf63?view=html",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
