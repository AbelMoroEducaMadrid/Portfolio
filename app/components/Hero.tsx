import Image from 'next/image'

interface HeroProps {
  t: {
    title: string;
    description: string;
    name: string;
  }
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="py-12 sm:py-20 px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
      <div className="content-box md:w-1/2 flex flex-col justify-center z-10 order-2 md:order-1 h-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t.title}</h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-justify">
          {t.description}
        </p>
      </div>
      <div className="md:w-1/2 z-10 flex flex-col items-center justify-center order-1 md:order-2">
        <div className="relative mb-4 w-64 h-64 sm:w-80 sm:h-80">
          <Image
            src="/Portfolio/profile.png"
            alt="Foto de Perfil"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg relative z-10 border-4 border-white dark:border-gray-800"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-center">{t.name}</h1>
      </div>
    </section>
  )
}

