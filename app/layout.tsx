import type { Metadata } from "next";
import "./globals.css";
// Google Fonts removed temporarily to fix build timeout
// import { Outfit, Plus_Jakarta_Sans } from "next/font/google";

// const outfit = Outfit({
//     variable: "--font-heading",
//     subsets: ["latin"],
//     display: "swap",
// });

// const plusJakarta = Plus_Jakarta_Sans({
//     variable: "--font-body",
//     subsets: ["latin"],
//     display: "swap",
// });

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
        <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
            <body
                className={`font-body bg-white text-slate-900 antialiased selection:bg-violet-100 selection:text-violet-900`}
            >
                {children}
            </body>
        </html>
    );
}
