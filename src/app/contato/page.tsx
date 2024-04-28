import Image from "next/image";
import style from "./contatoPage.module.css";
export default function ContatoPage() {
  return (
    <main>
      <div className={style.bg}></div>
      <section className={style.contatoContainer}>
        <div>
          <div>
            <Image src="" alt="" />
            <h2>Onde Nós Estamos?</h2>
            <p>Rua Píres do Rio, 509 - Éden, São joão de meriti - RJ</p>
          </div>
          <div>
            <Image src="" alt="" />
            <h2>Onde Nós Estamos?</h2>
            <p>Rua Píres do Rio, 509 - Éden, São joão de meriti - RJ</p>
          </div>
          <div>
            <Image src="" alt="" />
            <h2>Onde Nós Estamos?</h2>
            <p>Rua Píres do Rio, 509 - Éden, São joão de meriti - RJ</p>
          </div>
        </div>
        <div>
          <h1>ENVIE-NOS UMA MENSAGEM</h1>
          <p>
            Agradeçemos o seu contato, atendemos normalmente de segunda a sexta
            de 08:00 as 17:00 E no sábado de 08:00 as 12:00, em caso de dúvidas
            ou reclamações basta enviar-nos uma mensagem
          </p>
          <button>
            <a href="">whatsapp</a>
          </button>
        </div>
      </section>
    </main>
  );
}
