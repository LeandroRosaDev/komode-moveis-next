import Image from "next/image";
import style from "./sobre.module.css";

export default function SobrePage() {
  return (
    <main>
      <div className={style.bg}>
        <h1>Nossa História</h1>
        <p>o inicio da nossa história</p>
      </div>
      <section className={style.sobreContainer}>
        <h1 className="mainTitle">O início de tudo</h1>
        <h3 className="secondTitle" style={{ maxWidth: "900px" }}>
          Nossa historia sempre foi acompanhada de muita dedicação e esforço,
          trabalhamos duro e nos esforçamos desde o inicio para entregar
          produtos de excelente qualidade, sempre prezando pelo respeito mútuo
          entre nossos colaboradores.
        </h3>
      </section>
      <div
        className={style.sobreTimelineContainer}
        style={{ marginTop: "60px" }}
      >
        <div className={style.sobreContent}>
          <Image
            src="/assets/sobre/blog-2.jpg"
            width={800}
            height={370}
            className={style.sobreImg}
            alt="Imagem de um ambiente da casa"
          />
          <Image
            className={style.card}
            src="/assets/sobre/card-1.png"
            width={150}
            height={150}
            alt="Card com o ano de 2019"
          />
          <h3 className="secondTitle">
            <span>Como foi o nosso início </span> <br />
            No início de nossa jornada, em 2019, a Komode Móveis e Decorados
            nasceu como um sonho, uma pequena semente de esperança plantada em
            solo fértil. Em uma modesta loja, começamos a traçar nossa história,
            movidos pela determinação e paixão em criar móveis que transformam
            ambientes em lares acolhedores. Ao longo do tempo, aprendemos que
            cada peça de mobiliário que produzimos vai além de ser um simples
            objeto. É uma expressão de nossa dedicação, um reflexo de nossa
            criatividade e um testemunho de nossa incessante busca pela
            qualidade. Com cada detalhe meticulosamente planejado e cada
            estofado cuidadosamente selecionado, não construímos apenas móveis,
            mas sim, memórias duradouras.
          </h3>
        </div>
      </div>
      <hr className={style.timeLine} />
      <div className={style.sobreTimelineContainer}>
        <div className={style.sobreContent}>
          <Image
            src="/assets/sobre/blog-3.jpg"
            width={800}
            height={370}
            className={style.sobreImg}
            alt="Imagem de um ambiente da casa"
          />
          <Image
            className={style.card}
            src="/assets/sobre/card-2.png"
            width={150}
            height={150}
            alt=" Card com o ano de 2021"
          />
          <h3 className="secondTitle">
            <span>A pandemia </span> <br />
            Em 2021, a Komode Móveis e Decorados enfrentou um dos maiores
            desafios de sua trajetória: a pandemia. Em um momento de incertezas,
            mantivemos nosso compromisso com nossos colaboradores e clientes,
            sem reduzir o quadro de funcionários e mantendo o mesmo padrão de
            excelência em nossos estofados. Enfrentamos as adversidades com
            resiliência e inovação, sempre em busca do melhor atendimento e da
            mais alta qualidade em nossos produtos. Cada peça continuou a ser
            uma expressão de nossa dedicação, refletindo a mesma criatividade e
            empenho que nos caracterizam desde o início. Assim, reforçamos nossa
            missão de transformar ambientes em lares acolhedores, com a certeza
            de que juntos, superamos qualquer obstáculo.
          </h3>
        </div>
      </div>
      <hr className={style.timeLine} />
      <div className={style.sobreTimelineContainer}>
        <div className={style.sobreContent}>
          <Image
            src="/assets/sobre/blog-4.jpg"
            width={800}
            height={370}
            className={style.sobreImg}
            alt="Imagem de um ambiente da casa"
          />
          <Image
            className={style.card}
            src="/assets/sobre/card-3.png"
            width={150}
            height={150}
            alt="Card com o ano de 2022"
          />
          <h3 className="secondTitle">
            <span>A Fábrica </span> <br />
            Após consolidar nossa presença no mercado, em 2022, decidimos dar um
            passo audacioso: a construção de nossa própria fábrica. Encaramos
            este desafio com determinação, trabalho árduo e o compromisso
            inabalável de nossa dedicada equipe. Superamos cada obstáculo,
            transformando nossa visão em realidade. Hoje, a fábrica da Komode
            Móveis e Decorados é o coração pulsante de nossa produção, onde
            qualidade e inovação se encontram em cada peça que criamos. Assim,
            escrevemos mais um capítulo emocionante em nossa jornada, com a
            certeza de que muitos outros virão.
          </h3>
        </div>
      </div>
      <hr className={style.timeLine} />
      <div
        className={style.sobreTimelineContainer}
        style={{ marginBottom: "60px" }}
      >
        <div className={style.sobreContent}>
          <Image
            src="/assets/sobre/blog-5.jpg"
            width={800}
            height={370}
            className={style.sobreImg}
            alt="Imagem de um ambiente da casa"
          />
          <Image
            className={style.card}
            src="/assets/sobre/card-4.png"
            width={150}
            height={150}
            alt="Card com o ano de 2024"
          />
          <h3 className="secondTitle">
            <span>O Hoje, 2024 um ano de novidades </span> <br />
            Em 2024, a Komode Móveis e Decorados permanece fiel aos seus
            propósitos iniciais, sempre em busca de inovação e excelência. Ao
            longo dos anos, nossa dedicação à qualidade e ao atendimento
            impecável nunca vacilou. Continuamos a transformar ambientes em
            lares acolhedores, com móveis que são uma expressão de nossa
            criatividade e compromisso com a satisfação de nossos clientes. A
            cada nova coleção, renovamos nosso empenho em oferecer produtos que
            aliam design sofisticado e funcionalidade. Nossa trajetória é
            marcada por um contínuo aperfeiçoamento, assegurando que cada peça
            entregue reflita o melhor de nosso trabalho e paixão.
          </h3>
        </div>
      </div>
      <div className={style.parallax}>
        <h1 className="mainTitle" style={{ color: "white" }}>
          KOMODE MÓVEIS
        </h1>
        <h3 className={`secondTitle ${style.h3History}`}>
          Ao escolher a Komode Móveis e Decorados, você está optando por uma
          empresa que valoriza a excelência, a inovação e a satisfação do
          cliente. Nossa trajetória, marcada por anos de dedicação e evolução,
          reflete nosso compromisso inabalável com a qualidade e o design. Cada
          peça que criamos é um testemunho de nossa paixão em transformar
          ambientes em lares acolhedores e elegantes. Confie na Komode Móveis
          para trazer sofisticação, funcionalidade e conforto ao seu espaço. Com
          nossa experiência e atenção aos detalhes, garantimos que a sua casa
          será um reflexo único de sua personalidade e estilo. A Komode Móveis
          é, sem dúvida, a escolha certa para decorar o seu lar.
        </h3>
      </div>
    </main>
  );
}
