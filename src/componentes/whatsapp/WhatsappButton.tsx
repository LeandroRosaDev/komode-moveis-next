"use client";
import Image from "next/image";
import style from "./WhatsappButoon.module.css";
import whp from "../../../public/assets/whp-btn.png";

const WhatsappButton = () => {
  return (
    <a
      className={style.btnWhatsapp}
      target="blank"
      href="//api.whatsapp.com/send?phone=5521978991540&text=Olá tudo bem? Gostaria de saber mais sobre as promoções disponíveis para mim! Eu vim através do site de vocês!!
"
    >
      <Image src={whp} alt="Icone do Whatsapp" width={50} />
    </a>
  );
};

export default WhatsappButton;
