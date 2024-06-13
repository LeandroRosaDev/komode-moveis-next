import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/componentes/menu/Menu";
import FooterPage from "./footer/page";
import ScrollToTopButton from "@/componentes/scrolltotop/ScrollToTopButton";
import WhatsappButton from "@/componentes/whatsapp/WhatsappButton";
import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Komode Móveis e Decorados",
  description: "Melhor site de Móveis e Estofados do Brasil",
};

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.className} ${roboto.className}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '364157642748124');
            fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=364157642748124&ev=PageView&noscript=1"
            alt="pixel fb"
          />
        </noscript>
      </head>
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
