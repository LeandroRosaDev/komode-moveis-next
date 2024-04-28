import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/componentes/menu/Menu";
import FooterPage from "./footer/page";

export const metadata: Metadata = {
  title: "Komode Móveis e Decorados",
  description: "Melhor site de Móveis e Estofados do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
