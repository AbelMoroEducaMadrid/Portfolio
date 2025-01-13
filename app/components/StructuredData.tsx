export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abel Moro Paje",
    "jobTitle": "Estudiante de Desarrollo de Software",
    "url": "https://www.tuwebsite.com",
    "sameAs": [
      "https://github.com/tuusuario",
      "https://linkedin.com/in/tuusuario"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

