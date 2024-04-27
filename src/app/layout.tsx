import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/componentes/Menu";

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
      </body>
    </html>
  );
}
