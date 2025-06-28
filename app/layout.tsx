import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import StructuredData from "./components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abel Moro - Portafolio",
  description:
    "Portafolio y enlaces de Abel Moro Paje, un apasionado estudiante de desarrollo de software.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <StructuredData />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
