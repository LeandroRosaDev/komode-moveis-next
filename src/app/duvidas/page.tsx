import Image from "next/image";
import style from "./duvidas.module.css";

export default async function DuvidasPage() {
  return (
    <section className={style.duvidasContainer}>
      <div className={style.bg}>
        <h1>Dúvidas Frequentes</h1>
        <p>Retire todas as suas dúvidas abaixo</p>
      </div>

      <div className={style.gridDuvidasContainer}>
        <div className={style.duvidasContent}>
          <Image
            src="/assets/duvidas/duvidas-img-1.png"
            width={600}
            height={400}
            alt="Imagem de uma entrega"
          />
          <div className={style.duvidasContentText}>
            <h2>Prazo de Entrega</h2>

            <p className={style.duvidasText}>
              A Komode móveis tem a entrega mais rápida do mercado
            </p>
            <p className={style.duvidasSubText}>
              Na Komode Móveis e Decorados, entendemos a importância de receber
              seus móveis com rapidez e eficiência. Por isso, temos o
              compromisso de entregar nossos produtos em até 7 dias úteis. Nosso
              processo logístico é cuidadosamente planejado para garantir que
              você receba suas peças dentro do prazo estabelecido, sem
              comprometer a qualidade. Priorizamos a pontualidade e a satisfação
              do cliente, assegurando uma experiência de compra tranquila e
              confiável. Com a Komode Móveis, você pode confiar que seus novos
              móveis chegarão rapidamente, prontos para transformar seu lar com
              estilo e conforto.
            </p>
          </div>
        </div>

        <div className={style.duvidasContent}>
          <Image
            src="/assets/duvidas/duvidas-img-2.png"
            width={600}
            height={400}
            alt="Imagem de coleta de assinatura"
            id={style.imgMobile}
          />
          <div className={style.duvidasContentText}>
            <h2>Prazo de garantia</h2>

            <p className={style.duvidasText}>
              A Garantia do seu produto é assegurada por nós!
            </p>
            <p className={style.duvidasSubText}>
              Komode Móveis e Decorados, prezamos pela qualidade e durabilidade
              de nossos produtos, oferecendo uma garantia de 90 dias para sua
              tranquilidade. Durante este período, qualquer defeito de
              fabricação será reparado sem custo adicional. No entanto, é
              importante destacar que não cobrimos danos decorrentes de mau uso.
              Após os primeiros 7 dias da compra, caso haja necessidade de
              reparos, seu produto será encaminhado para nossa assistência
              técnica especializada. Estamos comprometidos em proporcionar um
              excelente atendimento, garantindo que seus móveis mantenham-se em
              perfeito estado por muito tempo.
            </p>
          </div>
          <Image
            src="/assets/duvidas/duvidas-img-2.png"
            width={600}
            height={400}
            alt="Imagem de coleta de assinatura"
            id={style.imgDesktop}
          />
        </div>

        <div className={style.duvidasContent}>
          <Image
            src="/assets/duvidas/duvidas-img-3.png"
            width={600}
            height={400}
            alt="Imagem de um pagamento no cartão"
          />

          <div className={style.duvidasContentText}>
            <h2>Pagamento </h2>

            <p className={style.duvidasText}>
              O pagamento aqui é somente no momento da entrega!
            </p>
            <p className={style.duvidasSubText}>
              Na Komode Móveis e Decorados, facilitamos a realização do seu
              sonho de ter um lar acolhedor e elegante. Aceitamos pagamentos em
              até 12 vezes sem juros no cartão, proporcionando flexibilidade e
              comodidade para você. Além disso, o pagamento é realizado apenas
              no momento da entrega, garantindo segurança e confiança em sua
              compra. Queremos que sua experiência com a Komode Móveis seja
              agradável e livre de preocupações, desde a escolha dos móveis até
              a sua chegada ao seu lar. Com nossa política de pagamento, fica
              ainda mais fácil transformar seu ambiente com peças de alta
              qualidade e design sofisticado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
