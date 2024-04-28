import Image from "next/image";
import card1 from "@/../public/assets/sobre/card-1.png";
import card2 from "@/../public/assets/sobre/card-2.png";
import card3 from "@/../public/assets/sobre/card-3.png";
import card4 from "@/../public/assets/sobre/card-4.png";
import blog2 from "@/../public/assets/sobre/blog-2.jpg";
import blog3 from "@/../public/assets/sobre/blog-3.jpg";
import blog4 from "@/../public/assets/sobre/blog-4.jpg";
import blog5 from "@/../public/assets/sobre/blog-5.jpg";
import blog7 from "@/../public/assets/sobre/blog-7.jpg";
import style from "./sobre.module.css";

export default function SobrePage() {
  return (
    <main>
      <div className={style.bg}></div>
      <section>
        <h1>O início de tudo</h1>
        <h3>
          Nossa historia sempre foi acompanhada de muita dedicação e esforço,
          trabalhamos duro e nos esforçamos desde o inicio para entregar
          produtos de excelente qualidade, sempre prezando pelo respeito mútuo
          entre nossos colaboradores.
        </h3>
        <div>
          <div>
            <Image src={blog2} alt="" />
            <Image src={card1} alt="" />
            <h3>
              <span>Como foi o nosso inicio </span>
              No início de nossa jornada, em 2019, a Komode Móveis e Decorados
              era apenas um sonho, uma pequena semente de esperança plantada em
              solo fértil. Em uma modesta loja, começamos a escrever nossa
              história, cheios de determinação e paixão pela criação de móveis
              que transformam ambientes em lares acolhedores. Com o tempo,
              aprendemos que cada peça de mobiliário que produzimos é mais do
              que apenas um objeto. É uma expressão de nossa dedicação, um
              reflexo de nossa criatividade e um testemunho de nossa busca
              incessante pela qualidade. Com cada detalhe meticulosamente
              pensado e cada estofado cuidadosamente escolhido, construímos não
              apenas móveis, mas sim, memórias.
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
