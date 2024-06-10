import Image from 'next/image';
import style from './sobre.module.css';

export default function SobrePage() {
  return (
    <main>
      <div className={style.bg}>
        <h1>Nossa História</h1>
        <p>o inicio da nossa história</p>
      </div>
      <section className={style.sobreContainer}>
        <h1 className="mainTitle">O início de tudo</h1>
        <h3 className="secondTitle" style={{ maxWidth: '900px' }}>
          Nossa historia sempre foi acompanhada de muita dedicação e esforço,
          trabalhamos duro e nos esforçamos desde o inicio para entregar
          produtos de excelente qualidade, sempre prezando pelo respeito mútuo
          entre nossos colaboradores.
        </h3>
      </section>
      <div
        className={style.sobreTimelineContainer}
        style={{ marginTop: '60px' }}
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
            <span>Como foi o nosso inicio </span> <br />
            No início de nossa jornada, em 2019, a Komode Móveis e Decorados era
            apenas um sonho, uma pequena semente de esperança plantada em solo
            fértil. Em uma modesta loja, começamos a escrever nossa história,
            cheios de determinação e paixão pela criação de móveis que
            transformam ambientes em lares acolhedores. Com o tempo, aprendemos
            que cada peça de mobiliário que produzimos é mais do que apenas um
            objeto. É uma expressão de nossa dedicação, um reflexo de nossa
            criatividade e um testemunho de nossa busca incessante pela
            qualidade. Com cada detalhe meticulosamente pensado e cada estofado
            cuidadosamente escolhido, construímos não apenas móveis, mas sim,
            memórias.
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
            <span>Como foi o nosso inicio </span> <br />
            No início de nossa jornada, em 2019, a Komode Móveis e Decorados era
            apenas um sonho, uma pequena semente de esperança plantada em solo
            fértil. Em uma modesta loja, começamos a escrever nossa história,
            cheios de determinação e paixão pela criação de móveis que
            transformam ambientes em lares acolhedores. Com o tempo, aprendemos
            que cada peça de mobiliário que produzimos é mais do que apenas um
            objeto. É uma expressão de nossa dedicação, um reflexo de nossa
            criatividade e um testemunho de nossa busca incessante pela
            qualidade. Com cada detalhe meticulosamente pensado e cada estofado
            cuidadosamente escolhido, construímos não apenas móveis, mas sim,
            memórias.
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
            <span>Como foi o nosso inicio </span> <br />
            No início de nossa jornada, em 2019, a Komode Móveis e Decorados era
            apenas um sonho, uma pequena semente de esperança plantada em solo
            fértil. Em uma modesta loja, começamos a escrever nossa história,
            cheios de determinação e paixão pela criação de móveis que
            transformam ambientes em lares acolhedores. Com o tempo, aprendemos
            que cada peça de mobiliário que produzimos é mais do que apenas um
            objeto. É uma expressão de nossa dedicação, um reflexo de nossa
            criatividade e um testemunho de nossa busca incessante pela
            qualidade. Com cada detalhe meticulosamente pensado e cada estofado
            cuidadosamente escolhido, construímos não apenas móveis, mas sim,
            memórias.
          </h3>
        </div>
      </div>
      <hr className={style.timeLine} />
      <div
        className={style.sobreTimelineContainer}
        style={{ marginBottom: '60px' }}
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
            <span>Como foi o nosso inicio </span> <br />
            No início de nossa jornada, em 2019, a Komode Móveis e Decorados era
            apenas um sonho, uma pequena semente de esperança plantada em solo
            fértil. Em uma modesta loja, começamos a escrever nossa história,
            cheios de determinação e paixão pela criação de móveis que
            transformam ambientes em lares acolhedores. Com o tempo, aprendemos
            que cada peça de mobiliário que produzimos é mais do que apenas um
            objeto. É uma expressão de nossa dedicação, um reflexo de nossa
            criatividade e um testemunho de nossa busca incessante pela
            qualidade. Com cada detalhe meticulosamente pensado e cada estofado
            cuidadosamente escolhido, construímos não apenas móveis, mas sim,
            memórias.
          </h3>
        </div>
      </div>
      <div className={style.parallax}>
        <h1 className="mainTitle">NOSSA HISTÓRIA</h1>
        <h3 className={`secondTitle ${style.h3History}`}>
          Acreditamos na criatividade como uma das principais forças do
          progresso. Com essa ideia, montamos uma linha de móveis excepcionais
          para os amantes de móveis em todos os lugares. Você finalmente chegou
          a este momento em sua vida - você comprou sua primeira casa ou se
          mudou para seu próprio apartamento. Na Komode Móveis e Decorados,
          estamos aqui para tornar esse momento especial ainda mais memorável,
          oferecendo uma gama de móveis e Decorados excepcionais que
          transformarão sua casa em um lar acolhedor.
        </h3>
      </div>
    </main>
  );
}
