"use client";
import Image from "next/image";
import style from "./WhatsappButoon.module.css";
import whp from "../../../public/assets/whp-btn.png";

const WhatsappButton = () => {
  return (
    <a
      className={style.btnWhatsapp}
      target="blank"
      href="https://wa.me/5521992342810?text=Ol%C3%A1+%21+Amei+os+planos+da+Marketing+Altuori%2C+gostaria+de+saber+um+pouco+mais%21"
    >
      <Image src={whp} alt="Icone do Whatsapp" width={50} />
    </a>
  );
};

export default WhatsappButton;
