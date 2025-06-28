import Head from "next/head";

export default function SEOMetadata() {
  return (
    <Head>
      <title>Abel Moro Paje - Estudiante de Desarrollo de Software</title>
      <meta
        name="description"
        content="Portafolio de Abel Moro Paje, un apasionado estudiante de desarrollo de software"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        property="og:title"
        content="Abel Moro Paje - Estudiante de Desarrollo de Software"
      />
      <meta
        property="og:description"
        content="Portafolio de Abel Moro Paje, un apasionado estudiante de desarrollo de software"
      />
      <meta property="og:image" content="https://tudominio.com/og-image.jpg" />
      <meta property="og:url" content="https://tudominio.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
