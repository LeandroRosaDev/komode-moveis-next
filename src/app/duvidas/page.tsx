import Image from 'next/image';
import style from './duvidas.module.css';
import duvidas1 from '@/../public/assets/duvidas/duvidas-img-1.png';
import duvidas2 from '@/../public/assets/duvidas/duvidas-img-2.png';
import duvidas3 from '@/../public/assets/duvidas/duvidas-img-3.png';

export default async function DuvidasPage() {
  return (
    <section className={style.duvidasContainer}>
      <div className={style.bg}>
        <h1>Dúvidas Frequentes</h1>
        <p>Retire todas as suas dúvidas abaixo</p>
      </div>
      <div>
        <div className={style.gridDuvidasContainer}>
          <div className={style.duvidasContent}>
            <Image src={duvidas1} alt="Imagem de um ambiente da casa" />
            <h3 className="secondTitle">
              <span>Como foi o nosso inicio </span> <br />
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
          <div className={style.duvidasContent}>
            <Image
              src={duvidas2}
              alt="Imagem de um ambiente da casa"
              id={style.imgNone}
            />
            <h3 className="secondTitle">
              <span>Como foi o nosso inicio </span> <br />
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
            <Image src={duvidas2} alt="Imagem de um ambiente da casa" />
          </div>
          <div className={style.duvidasContent}>
            <Image src={duvidas3} alt="Imagem de um ambiente da casa" />
            <h3 className="secondTitle">
              <span>Como foi o nosso inicio </span> <br />
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
      </div>
    </section>
  );
}
