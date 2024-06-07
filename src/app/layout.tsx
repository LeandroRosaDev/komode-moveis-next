import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/componentes/menu/Menu";
import FooterPage from "./footer/page";
import ScrollToTopButton from "@/componentes/scrolltotop/ScrollToTopButton";
import WhatsappButton from "@/componentes/whatsapp/WhatsappButton";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Komode Móveis e Decorados",
  description: "Melhor site de Móveis e Estofados do Brasil",
};
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body>
        <Menu />
        {children}
        <FooterPage />
        <WhatsappButton />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
