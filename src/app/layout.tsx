import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Annoncer Pro — Petites annonces B2B entre professionnels",
  description:
    "Achetez et vendez du matériel professionnel entre entreprises. Équipements industriels, véhicules, fournitures et services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased bg-gray-50 text-[#0F172A]`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-white border-t border-gray-200 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
            © 2026 Annoncer Pro — Plateforme de petites annonces B2B entre professionnels.
          </div>
        </footer>
      </body>
    </html>
  );
}
