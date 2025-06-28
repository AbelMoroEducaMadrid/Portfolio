import { Download } from "lucide-react";

interface DownloadCVProps {
  t: {
    downloadCV: string;
    cvLink: string;
  };
}

export default function DownloadCV({ t }: DownloadCVProps) {
  return (
    <section className="py-12 sm:py-20 px-6 text-center">
      <a
        href={t.cvLink}
        download
        className="button-box inline-flex items-center px-8 py-4 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700"
      >
        <Download className="w-6 h-6 mr-2" />
        {t.downloadCV}
      </a>
    </section>
  );
}
