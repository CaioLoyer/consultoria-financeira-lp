import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MTBI - Método Anti-Burro de Investimento | Consultoria Financeira",
  description:
    "Aprenda a investir com clareza e segurança. O MTBI é um programa de formação em investimentos criado para desenvolver pensamento estratégico, disciplina e visão de longo prazo.",
  keywords: [
    "investimentos",
    "consultoria financeira",
    "finanças pessoais",
    "renda fixa",
    "ações",
    "FIIs",
    "ETFs",
    "criptomoedas",
  ],
  authors: [{ name: "MTBI" }],
  openGraph: {
    title: "MTBI - Método Anti-Burro de Investimento",
    description:
      "Aprenda a investir com clareza e segurança. Desenvolva pensamento estratégico e visão de longo prazo.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
