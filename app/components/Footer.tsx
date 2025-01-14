interface FooterProps {
  t: {
    footer: string;
  }
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="py-6 px-6 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-8">
      <p>&copy; {new Date().getFullYear()} Abel Moro Paje. {t.footer}</p>
    </footer>
  )
}

