import Image from "next/image";
import style from "./links.module.css";
import Link from "next/link";

export default function SobrePage() {
  return (
    <main className={style.bg}>
      <Image
        src="/assets/logotipo2.png"
        alt="Logotipo"
        width={100}
        height={100}
      />
      <div className={style.bg2}>
        <a
          target="blank"
          href="https://www.facebook.com/komodemoveisedecorados"
        >
          <Image
            src="/assets/menu-social-logo-1.png"
            alt="Logotipo"
            width={30}
            height={30}
          />
        </a>
        <a target="blank" href="https://www.instagram.com/komodemd/">
          <Image
            src="/assets/menu-social-logo-3.png"
            alt="Logotipo"
            width={30}
            height={30}
          />
        </a>
      </div>
      <a
        className={style.card}
        target="blank"
        href="https://api.whatsapp.com/send?phone=5521978991540&text=Ol%C3%A1,%20eu%20vi%20o%20an%C3%BAncio%20de%20retr%C3%A1teis%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20a%20respeito!"
      >
        <Image
          src="/assets/whp-btn.png"
          alt="Logotipo"
          width={40}
          height={40}
        />
        Converse com a nossa equipe de Vendas
      </a>
      <a
        className={style.card}
        target="blank"
        href="https://www.whatsapp.com/catalog/5521978991540/?app_absent=0"
      >
        <Image
          src="/assets/whp-btn.png"
          alt="Logotipo"
          width={40}
          height={40}
        />
        Confira nosso catálogo de retráteis
      </a>
    </main>
  );
}
