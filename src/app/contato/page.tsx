import Image from 'next/image';
import style from './contatoPage.module.css';

export default function ContatoPage() {
  return (
    <main className="container">
      <div className={style.bg}>
        <h1>Contato</h1>
        <p>Fale conosco</p>
      </div>
      <section className={style.contatoContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7356.834775885669!2d-43.396623!3d-22.786993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x996569cf804ddb%3A0xbf605c5e51e6ef5c!2sAL%20M%C3%B3veis%20e%20Estofados!5e0!3m2!1spt-BR!2sus!4v1714429604688!5m2!1spt-BR!2sus"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
        <div className={style.contatoContent}>
          <div className={style.contato}>
            <div className={style.boxContato}>
              <Image
                src="/assets/contato/contato-icon-3.png"
                width={50}
                height={50}
                alt="Ícone de GPS"
              />
              <h2>
                Onde Nós <br /> Estamos
              </h2>
              <p>
                Rua Píres do Rio, 509 - Éden, <br /> São joão de meriti - RJ
              </p>
            </div>
            <div className={style.boxContato}>
              <Image
                src="/assets/contato/contato-icon-1.png"
                width={50}
                height={50}
                alt="ìcone de um telefone"
              />
              <h2>
                Entre em <br /> Contato
              </h2>
              <p>
                T +55 21 99455 3607 <br /> F +55 21 96645 3123{' '}
              </p>
            </div>
            <div className={style.boxContato}>
              <Image
                src="/assets/contato/contato-icon-2.png"
                width={50}
                height={50}
                alt="Ícone de um relógio"
              />
              <h2>Horário de funcionamento</h2>
              <p>
                Seg - Sex: 8 am - 17 pm <br /> Sáb 8 am - 12 pm
              </p>
            </div>
          </div>
        </div>
        <div className={style.mensagem}>
          <h1>ENVIE-NOS UMA MENSAGEM</h1>
          <p>
            Agradeçemos o seu contato, atendemos normalmente de segunda a sexta
            de 08:00 as 17:00 <br /> E no sábado de 08:00 as 12:00, em caso de
            dúvidas ou reclamações basta enviar-nos uma mensagem
          </p>

          <a className="buttonTransparent" href="">
            whatsapp
          </a>
        </div>
      </section>
    </main>
  );
}
