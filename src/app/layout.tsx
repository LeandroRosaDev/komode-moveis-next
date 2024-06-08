import type { Metadata } from 'next';
import './globals.css';
import Menu from '@/componentes/menu/Menu';
import FooterPage from './footer/page';
import ScrollToTopButton from '@/componentes/scrolltotop/ScrollToTopButton';
import WhatsappButton from '@/componentes/whatsapp/WhatsappButton';
import { Montserrat, Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Komode Móveis e Decorados',
  description: 'Melhor site de Móveis e Estofados do Brasil',
};
const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
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
