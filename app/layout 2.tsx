import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ['400', '500', '600', '700', '800'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "CleanDar - L'OS des Indépendants",
  description: "La plateforme tout-en-un pour gérer votre activité. Agenda, Facturation, Clients, IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${outfit.variable} ${jakarta.variable} font-body bg-white text-slate-900 antialiased selection:bg-violet-100 selection:text-violet-900`}>
        {children}
      </body>
    </html>
  );
}
