"use client";
import { useState } from "react";
import style from "./politicas.module.css";

type ContentKey =
  | "politica"
  | "privacidade"
  | "termos"
  | "duvidas"
  | "entregas";

export default function PoliticasPage() {
  const [currentContent, setCurrentContent] = useState<ContentKey>("politica");

  const content = {
    politica: {
      title: "Política de Segurança e Privacidade",
      text: `A segurança e a privacidade dos nossos clientes são prioridades fundamentais para nós da Komode.\n Comprometemo-nos a proteger todas as informações pessoais que você nos fornece durante sua visita ao nosso site.\n\n 1. **Coleta de Informações:**\nDurante a sua interação com o nosso site, podemos coletar informações pessoais, como nome, endereço de e-mail,\nendereço de entrega e informações de pagamento. Esses dados são necessários para processar suas compras e fornecer o melhor serviço possível.\n\n2. **Uso das Informações:**\nAs informações coletadas serão utilizadas exclusivamente para processar suas compras, fornecer suporte ao cliente, personalizar sua experiência de compra e comunicar novidades sobre nossos produtos e ofertas especiais, se você optar por receber essas comunicações.\n\n3. **Proteção de Dados:**\nImplementamos medidas de segurança avançadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição não autorizada. Todas as transações financeiras são processadas por meio de tecnologia criptografada para garantir a máxima segurança.\n\n4. **Compartilhamento de Informações:**\nNão compartilhamos suas informações pessoais com terceiros, exceto quando necessário para processar suas compras (por exemplo, com serviços de entrega) ou quando exigido por lei.\n\n5. **Cookies:**\nNosso site pode usar cookies para melhorar sua experiência de navegação. Você pode optar por aceitar ou recusar cookies em seu navegador, mas a recusa pode limitar algumas funcionalidades do site.\n\n6. **Atualizações na Política de Privacidade:**\nPeriodicamente, podemos fazer alterações nesta política de privacidade para refletir práticas aprimoradas de segurança e privacidade. Quaisquer alterações significativas serão comunicadas através do nosso site.\n\nAo continuar a usar nosso site, você concorda com os termos desta política de privacidade. Se tiver alguma dúvida ou preocupação sobre nossas práticas de segurança e privacidade, entre em contato conosco.`,
    },
    privacidade: {
      title: "Política de Pagamento",
      text: `Na Komode, queremos tornar sua experiência de compra o mais simples e segura possível. Para isso, oferecemos diversas opções de pagamento para atender às suas necessidades.\n\n1. **Opções de Pagamento:**\nAceitamos uma variedade de métodos de pagamento, incluindo cartões de crédito/débito (Visa, Mastercard, American Express), PayPal e transferência bancária.\n\n2. **Segurança das Transações:**\nTodas as transações financeiras são processadas por meio de uma conexão segura e criptografada. Não armazenamos suas informações de pagamento em nosso sistema após a conclusão da transação.\n\n3. **Processamento de Pagamentos:**\nSeu pagamento será processado imediatamente após a conclusão da compra. Você receberá um e-mail de confirmação assim que o pagamento for autorizado.\n\n4. **Recibos e Faturas:**\nApós a conclusão da compra, você receberá um recibo detalhado por e-mail, que servirá como comprovante de pagamento. Se precisar de uma fatura, entre em contato conosco e teremos prazer em fornecê-la.\n\nSe você tiver alguma dúvida ou problema com o pagamento, entre em contato conosco imediatamente para que possamos ajudar a resolver a situação.`,
    },
    termos: {
      title: "Política de Troca e Devoluções",
      text: `Na Komode, queremos garantir sua completa satisfação com sua compra.\n Se você não estiver totalmente satisfeito com seu produto, estamos aqui para ajudar.\n 1. **Política de Devolução:**\nAceitamos devoluções dentro de [número de dias] dias a partir da data de recebimento do produto.\n\n Para ser elegível para devolução, o item deve estar em sua condição original, sem sinais de uso ou danos.\n\n2. **Processo de Devolução:**\nPara iniciar o processo de devolução, entre em contato conosco para obter um número de autorização de devolução. \nVocê será responsável pelo custo do envio do produto de volta para nós, a menos que o motivo da devolução seja devido a um erro nosso.\n 3. **Reembolsos:** Assim que recebermos e examinarmos o item devolvido, iniciaremos o processo de reembolso para o método de pagamento original. O reembolso pode levar alguns dias para aparecer em sua conta, dependendo do seu provedor de serviços financeiros.\n\n4. **Trocas:**\nSe preferir trocar seu item por outro, entre em contato conosco para\n que possamos organizar a troca. Você será responsável pelo custo do envio do item de volta para nós, a menos que o motivo da troca seja devido a um erro nosso.\n\n5. **Itens Não Elegíveis para Devolução:**\nAlguns itens, como produtos personalizados ou itens em liquidação, podem não ser elegíveis para devolução.\n Consulte a descrição do produto antes de fazer sua compra.\n\nEsperamos que você fique satisfeito com sua compra na Komode, mas se surgir algum problema, não hesite em nos contatar para que possamos resolver rapidamente. Sua satisfação é nossa prioridade.`,
    },
    duvidas: {
      title: "Termo de Garantia",
      text: `Na Komode, temos orgulho da qualidade dos nossos produtos e queremos garantir a sua satisfação.\n Oferecemos garantia para todos os produtos que vendemos, para que você possa fazer suas compras com confiança.

1. **Período de Garantia:**
   Cada produto possui um período de garantia específico, \n que varia de acordo com o tipo de produto e o fabricante. Consulte a página do produto ou entre em contato \nconosco para obter informações detalhadas sobre o período de garantia.

2. **Cobertura da Garantia:**
   A garantia cobre defeitos de fabricação e problemas relacionados\n ao desempenho normal do produto. Se você encontrar qualquer problema coberto pela garantia durante o \nperíodo especificado, entre em contato conosco para solicitar assistência.

3. **Exclusões da Garantia:**
   A garantia não cobre danos causados por uso indevido, \n negligência, acidentes, modificações não autorizadas ou\n desgaste normal do produto. Qualquer alteração feita no produto por terceiros \nque não sejam autorizados por nós pode invalidar a garantia.

4. **Processo de Reclamação:**
   Se você precisar acionar a garantia, entre em contato conosco o mais rápido possível.\n Será necessário fornecer informações detalhadas sobre o problema, \njuntamente com evidências fotográficas, se aplicável. \nFaremos o possível para resolver o problema de forma rápida e eficiente.

Estamos comprometidos em fornecer \nprodutos de alta qualidade e garantir sua satisfação. Se você tiver alguma dúvida sobre nossa\n política de garantia, não hesite em entrar em contato conosco.
`,
    },
    entregas: {
      title: "Política de Entregas",
      text: `Prazos de Entrega:
Os prazos de entrega podem variar de acordo com a localidade, tipo de produto e disponibilidade do estoque.\nDurante o processo de compra, você será informado sobre o prazo estimado de entrega para o seu endereço.

Cobertura de Entrega:
Entregamos para todo o país, abrangendo diversas regiões. No entanto, algumas áreas\n remotas podem ter prazos de entrega mais longos ou exigir taxas adicionais.\nVerifique a disponibilidade de entrega para o seu CEP durante o processo de compra.

Acompanhamento da Entrega:
Assim que o pedido for despachado, você receberá informações de rastreamento para acompanhar o status da entrega.\nIsso permitirá que você saiba quando esperar pelo seu pacote e esteja preparado para recebê-lo.

Recepção do Pedido:
Ao receber seu pedido, recomendamos que você confira cuidadosamente os itens entregues.\nVerifique se tudo está de acordo com o que foi solicitado e se não há danos visíveis na embalagem ou nos produtos.

Alteração de Endereço:
Após a conclusão do pedido, não é possível alterar o endereço de entrega.\nCertifique-se de fornecer o endereço correto durante o processo de compra para evitar contratempos na entrega.

Limitações da Entrega:
Não realizamos entregas em locais que exigem guinchos, içamentos ou outras formas especiais de transporte.\nCertifique-se de que o produto se adequa às medidas das portas e espaços de sua residência para evitar dificuldades na entrega.

Contato em Caso de Problemas:
Se houver qualquer problema com a entrega, como atrasos ou danos nos produtos, entre em contato conosco imediatamente para que\n possamos resolver a situação da melhor forma possível.
`,
    },
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const contentKey = event.currentTarget.getAttribute(
      "data-content"
    ) as ContentKey;
    setCurrentContent(contentKey);
  };

  return (
    <section className={style.politicasContainer}>
      <div className={style.bg}>
        <h1>Dúvidas Frequentes</h1>
        <p>Retire todas as suas dúvidas abaixo</p>
      </div>

      <div className={style.containerDivs}>
        <div className={style.containerLi}>
          <h1 className={style.politicasTitle}>DÚVIDAS FREQUENTES</h1>
          <hr className={style.politicasLine} />

          <nav className={style.duvidasFrequentes}>
            <ul>
              <li>
                <a href="#" data-content="politica" onClick={handleLinkClick}>
                  - Política de Segurança e Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-content="privacidade"
                  onClick={handleLinkClick}
                >
                  - Política de Pagamento
                </a>
              </li>
              <li>
                <a href="#" data-content="termos" onClick={handleLinkClick}>
                  - Política de Troca e Devoluções
                </a>
              </li>
              <li>
                <a href="#" data-content="duvidas" onClick={handleLinkClick}>
                  - Termo de Garantia
                </a>
              </li>
              <li>
                <a href="#" data-content="entregas" onClick={handleLinkClick}>
                  - Política de Entregas
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={style.politicasText}>
          <h1 className={style.politicasSubTitle}>
            {content[currentContent].title}
          </h1>
          <pre>{content[currentContent].text}</pre>
        </div>
      </div>
    </section>
  );
}
