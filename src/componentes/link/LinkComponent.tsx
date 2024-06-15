"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./links.module.css";

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (): TimeLeft => {
  if (typeof window === "undefined") {
    return { hours: 27, minutes: 0, seconds: 0 };
  }

  let endTime = localStorage.getItem("endTime");
  if (!endTime) {
    endTime = (Date.now() + 27 * 60 * 60 * 1000).toString();
    localStorage.setItem("endTime", endTime);
  }
  const now = new Date().getTime();
  const difference = new Date(parseInt(endTime)).getTime() - now;

  let timeLeft: TimeLeft = {
    hours: Math.floor(difference / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };

  return timeLeft;
};

export default function LinkComponent() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, []);

  return (
    <section className={style.bg}>
      <Image
        src="/assets/logotipo2.png"
        alt="Logotipo"
        width={100}
        height={100}
        className={style.logotipo}
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
        Clique aqui e tire suas dúvidas no whatsapp
      </a>

      <div className={style.cardText}>
        <h1>🎉 Promoção de Retráteis! 🎉</h1>
        <h2>
          Toda a nossa linha de sofás retráteis de 2m está com uma promoção
          imperdível. São sofás novos, diretos da fábrica, retráteis e
          reclináveis, com condições incríveis:
        </h2>
        <p>
          <span>➡ 12x sem juros:</span> Parcelamento facilitado para caber no
          seu bolso.
        </p>
        <p>
          <span>➡ Frete grátis:</span> Entregamos na sua casa sem custo
          adicional.
        </p>
        <p>
          {" "}
          <span>➡ Pagamento na entrega:</span> Você só paga quando o sofá
          chegar.
        </p>
        <p>
          {" "}
          <span>➡ Montagem gratuita:</span> Nossa equipe cuida de tudo para
          você.
        </p>
        <p>
          <span>➡ Garantia e nota fiscal:</span> Produtos novos, com garantia e
          nota fiscal.
        </p>
        <h3>
          Tudo isso a partir de <span>R$1499,00</span> ou 12x sem juros de
          <span> R$149,90</span> mensais. Não perca tempo, nossa promoção é por
          <span> tempo e estoque limitado!</span> Garanta já o seu conforto e
          estilo com a nossa linha de sofás retráteis.
        </h3>
        <h2>Promoção assim você só encontra na Komode Móveis</h2>
      </div>
      <div className={style.cardCronometro}>
        <Image
          src="/assets/cronometro.svg"
          alt="Cronômetro"
          width={60}
          height={60}
        />
        <div>
          <h1>
            Promoção termina em: <br />
          </h1>
          <p>
            {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        </div>
      </div>
    </section>
  );
}
