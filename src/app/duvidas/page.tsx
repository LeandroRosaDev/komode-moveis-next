import Image from 'next/image';
import style from './duvidas.module.css';

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
              A Komode Móveis, <span>REVENDEDORA</span> de móveis, presta
              atendimento contra eventuais defeitos de fabricação dos produtos
              (vícios aparentes), no prazo{' '}
              <span>LEGAL de 90 (noventa) dias</span> após a data de entrega do
              produto, conforme previsto no artigo 26, II da Lei 8.078/90,
              consoante às seguintes regras de utilização dos produtos:
            </p>
            <p className={style.duvidasSubText}>
              IMPORTANTE: Todos os produtos adquiridos deverão ser conferidos no
              momento da entrega e/ou montagem. UMA VEZ ASSINADA A DOCUMENTAÇÃO
              SEM RESSALVAS, NÃO SERÃO ACEITAS RECLAMAÇÕES POSTERIORES SOBRE
              DANOS DE FÁCIL CONSTATAÇÃO, COMO ARRANHÕES, RASGOS, LASCADOS,
              MANCHAS, BEM COMO VIDROS QUEBRADOS OU TRINCADOS. O documento
              assinado pelo próprio ou por pessoa maior designada para tanto
              (sob responsabilidade do cliente), no ato de recebimento, comprova
              a conferência e declaração de que os produtos se encontram em
              perfeito estado.
            </p>
          </div>
        </div>

        <div className={style.duvidasContent}>
          <div className={style.duvidasContentText}>
            <h2>Prazo de garantia</h2>

            <p className={style.duvidasText}>
              A Komode Móveis, <span>REVENDEDORA</span> de móveis, presta
              atendimento contra eventuais defeitos de fabricação dos produtos
              (vícios aparentes), no prazo{' '}
              <span>LEGAL de 90 (noventa) dias</span> após a data de entrega do
              produto, conforme previsto no artigo 26, II da Lei 8.078/90,
              consoante às seguintes regras de utilização dos produtos:
            </p>
            <p className={style.duvidasSubText}>
              IMPORTANTE: Todos os produtos adquiridos deverão ser conferidos no
              momento da entrega e/ou montagem. UMA VEZ ASSINADA A DOCUMENTAÇÃO
              SEM RESSALVAS, NÃO SERÃO ACEITAS RECLAMAÇÕES POSTERIORES SOBRE
              DANOS DE FÁCIL CONSTATAÇÃO, COMO ARRANHÕES, RASGOS, LASCADOS,
              MANCHAS, BEM COMO VIDROS QUEBRADOS OU TRINCADOS. O documento
              assinado pelo próprio ou por pessoa maior designada para tanto
              (sob responsabilidade do cliente), no ato de recebimento, comprova
              a conferência e declaração de que os produtos se encontram em
              perfeito estado.
            </p>
          </div>
          <Image
            src="/assets/duvidas/duvidas-img-2.png"
            width={600}
            height={400}
            alt="Imagem de coleta de assinatura"
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
            <h2>Prazo de garantia</h2>

            <p className={style.duvidasText}>
              A Komode Móveis, <span>REVENDEDORA</span> de móveis, presta
              atendimento contra eventuais defeitos de fabricação dos produtos
              (vícios aparentes), no prazo{' '}
              <span>LEGAL de 90 (noventa) dias</span> após a data de entrega do
              produto, conforme previsto no artigo 26, II da Lei 8.078/90,
              consoante às seguintes regras de utilização dos produtos:
            </p>
            <p className={style.duvidasSubText}>
              IMPORTANTE: Todos os produtos adquiridos deverão ser conferidos no
              momento da entrega e/ou montagem. UMA VEZ ASSINADA A DOCUMENTAÇÃO
              SEM RESSALVAS, NÃO SERÃO ACEITAS RECLAMAÇÕES POSTERIORES SOBRE
              DANOS DE FÁCIL CONSTATAÇÃO, COMO ARRANHÕES, RASGOS, LASCADOS,
              MANCHAS, BEM COMO VIDROS QUEBRADOS OU TRINCADOS. O documento
              assinado pelo próprio ou por pessoa maior designada para tanto
              (sob responsabilidade do cliente), no ato de recebimento, comprova
              a conferência e declaração de que os produtos se encontram em
              perfeito estado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
