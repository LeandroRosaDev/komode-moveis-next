import Image from "next/image";
import style from "./contatoPage.module.css";
import telefone from "../../../public/assets/contato/contato-icon-1.png";
import relogio from "../../../public/assets/contato/contato-icon-2.png";
import gps from "../../../public/assets/contato/contato-icon-3.png";
export default function ContatoPage() {
  return (
    <main>
      <div className={style.bg}></div>
      <section className={style.contatoContainer}>
        {/* <iframe
          src={contatoIcon1}mbed?pb=!1m18!1m12!1m3!1d3678.373149823751!2d-43.30915600000001!3d-22.7886332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997aea6643b655%3A0xe4516119cb567fb5!2sAv.%20Pres.%20Vargas%2C%20292%20-%20Centro%2C%20Duque%20de%20Caxias%20-%20RJ%2C%2025070-330!5e0!3m2!1spt-BR!2sbr!4v1710095280520!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe> */}
        <div className={style.contato}>
          <div>
            <Image src={gps} alt="" />
            <h2>Onde Nós Estamos</h2>
            <p>
              Rua Píres do Rio, 509 - Éden, <br /> São joão de meriti - RJ
            </p>
          </div>
          <div>
            <Image src={telefone} alt="" />
            <h2>Entre em Contato</h2>
            <p>
              T +55 21 99455 3607 <br /> F +55 21 96645 3123{" "}
            </p>
          </div>
          <div>
            <Image src={relogio} alt="" />
            <h2>Horário de funcionamento</h2>
            <p>
              Seg - Sex: 8 am - 17 pm <br /> Sáb 8 am - 12 pm
            </p>
          </div>
        </div>
        <div className={style.mensagem}>
          <h1>ENVIE-NOS UMA MENSAGEM</h1>
          <p>
            Agradeçemos o seu contato, atendemos normalmente de segunda a sexta
            de 08:00 as 17:00 E no sábado de 08:00 as 12:00, em caso de dúvidas
            ou reclamações basta enviar-nos uma mensagem
          </p>

          <a className="buttonTransparent" href="">
            whatsapp
          </a>
        </div>
      </section>
    </main>
  );
}
