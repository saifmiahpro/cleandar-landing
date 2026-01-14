import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "CleanDar - L'OS des Indépendants",
    description: "La plateforme tout-en-un pour gérer votre activité. Agenda, Facturation, Clients, IA.",
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
    themeColor: '#050507',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="scroll-smooth bg-[#050507]" suppressHydrationWarning>
            <body
                className="font-body bg-[#050507] text-slate-200 antialiased selection:bg-violet-600 selection:text-white m-0 p-0"
                style={{
                    WebkitTapHighlightColor: 'transparent',
                }}
            >
                {children}
            </body>
        </html>
    );
}
