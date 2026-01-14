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
        <html lang="fr" className="scroll-smooth h-full" suppressHydrationWarning>
            <body
                className="font-body bg-white text-slate-900 antialiased selection:bg-violet-100 selection:text-violet-900 h-full m-0 p-0 overflow-x-hidden"
                style={{
                    WebkitTapHighlightColor: 'transparent',
                }}
            >
                {children}
            </body>
        </html>
    );
}
