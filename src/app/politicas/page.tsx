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
      text: `A segurança e a privacidade 
      dos nossos clientes 
      são prioridades fundamentais para nós da Komode.
      Comprometemo-nos a proteger todas as 
      informações pessoais 
      que você nos fornece durante sua 
      visita ao nosso site.\n\n
      1. **Coleta de Informações:**
      Durante a sua interação com o nosso 
      site, podemos coletar 
      informações pessoais, como nome, 
      endereço de e-mail,
      endereço de entrega e informações 
      de pagamento.
      Esses dados são necessários para 
      processar suas compras 
      e fornecer o melhor serviço possível.\n\n
      2. **Uso das Informações:**
      As informações coletadas serão 
      utilizadas exclusivamente 
      para processar suas compras, 
      fornecer suporte ao cliente,
      personalizar sua experiência de 
      compra e comunicar 
      novidades sobre nossos produtos e 
      ofertas especiais,
      se você optar por receber essas 
      comunicações.\n\n
      3. **Proteção de Dados:**
      Implementamos medidas de segurança 
      avançadas para proteger suas 
      informações contra acesso não autorizado,
      alteração, divulgação ou destruição 
      não autorizada.
      Todas as transações financeiras são 
      processadas por
      meio de tecnologia criptografada para 
      garantir a máxima segurança.\n\n
      4. **Compartilhamento de Informações:**
      Não compartilhamos suas informações 
      pessoais com terceiros,
       exceto quando necessário para 
       processar suas compras
      (por exemplo, com serviços de entrega) 
      ou quando exigido por lei.\n\n
      5. **Cookies:**
      Nosso site pode usar cookies para 
      melhorar sua experiência de navegação.
      Você pode optar por aceitar ou recusar 
      cookies em seu navegador,
      mas a recusa pode limitar 
      algumas funcionalidades do site.\n\n
      6. **Atualizações na Política de Privacidade:**
      Periodicamente, podemos fazer 
      alterações nesta política de privacidade
      para refletir práticas aprimoradas 
      de segurança e privacidade.
      Quaisquer alterações significativas serão
       comunicadas através do nosso site.
      Ao continuar a usar nosso site, 
      você concorda
      com os termos desta política de 
      privacidade.
      Se tiver alguma dúvida ou preocupação 
      sobre nossas
      práticas de segurança e privacidade, 
      entre em contato conosco.\n\n`,
    },
    privacidade: {
      title: "Política de Pagamento",
      text: `Na Komode, queremos tornar sua experiência 
      de compra o mais simples e segura possível.
      Para isso, oferecemos diversas opções de 
      pagamento para atender às suas necessidades.\n\n
      1. **Opções de Pagamento:**
      Aceitamos uma variedade de métodos de pagamento, 
      incluindo cartões de crédito/débito 
      (Visa, Mastercard, American Express),
      PayPal e transferência bancária.\n\n
      2. **Segurança das Transações:**
      Todas as transações financeiras são processadas 
      por meio de uma conexão segura e criptografada.
      Não armazenamos suas informações de pagamento em 
      nosso sistema após a conclusão da transação.\n\n
      3. **Processamento de Pagamentos:**
      Seu pagamento será processado 
      imediatamente após a conclusão da compra.
      Você receberá um e-mail de confirmação 
      assim que o pagamento for autorizado.\n\n
      4. **Recibos e Faturas:**
      Após a conclusão da compra, você receberá 
      um recibo detalhado por e-mail,
      que servirá como comprovante de pagamento.
      Se precisar de uma fatura, entre em contato 
      conosco e teremos prazer em fornecê-la.
      Se você tiver alguma dúvida ou problema com o pagamento,
      entre em contato conosco imediatamente para 
      que possamos ajudar a resolver a situação.\n\n`,
    },

    termos: {
      title: "Política de Troca e Devoluções",
      text: `Na Komode, queremos garantir sua 
      completa satisfação com sua compra.
      Se você não estiver totalmente satisfeito 
      com seu produto, estamos aqui para ajudar.\n\n
      1. **Política de Devolução:**
      Aceitamos devoluções dentro de 3 dias a 
      partir da data de recebimento do produto.
      Para ser elegível para devolução, o item 
      deve estar em sua condição original,
      sem sinais de uso ou danos.\n\n
      2. **Processo de Devolução:**
      Para iniciar o processo de devolução, 
      entre em contato conosco para obter 
      um número de autorização de devolução.
      Você será responsável pelo custo do 
      envio do produto de volta para nós,
      a menos que o motivo da devolução 
      seja devido a um erro nosso.\n\n
      3. **Reembolsos:**
      Assim que recebermos e examinarmos 
      o item devolvido,
      iniciaremos o processo de reembolso para 
      o método de pagamento original.
      O reembolso pode levar alguns dias para 
      aparecer em sua conta,
      dependendo do seu provedor de serviços 
      financeiros.\n\n
      4. **Trocas:**
      Se preferir trocar seu item por outro, 
      entre em 
      contato conosco para que possamos o
      rganizar a troca.
      Você será responsável pelo custo do e
      nvio do item de volta para nós,
      a menos que o motivo da troca seja 
      devido a um erro nosso.\n\n
      5. **Itens Não Elegíveis para Devolução:**
      Alguns itens, como produtos personalizados 
      ou itens em liquidação,
      podem não ser elegíveis para devolução.
      Consulte a descrição do produto antes de 
      fazer sua compra.
      Esperamos que você fique satisfeito com sua 
      compra na Komode,
      mas se surgir algum problema, não hesite em 
      nos contatar para que 
      possamos resolver rapidamente.
      Sua satisfação é nossa prioridade.`,
    },

    duvidas: {
      title: "Termo de Garantia",
      text: `Na Komode, temos orgulho da 
      qualidade dos nossos produtos
      e queremos garantir a sua satisfação.
      Oferecemos garantia para 
      todos os produtos que vendemos,
      para que você possa fazer suas compras 
      com confiança.\n\n
      1. **Período de Garantia:**
      Cada produto possui um período de 
      garantia específico,
      que varia de acordo com o tipo de 
      produto e o fabricante.
      Consulte a página do produto ou entre 
      em contato conosco
      para obter informações detalhadas 
      sobre o período de garantia.\n\n
      2. **Cobertura da Garantia:**
      A garantia cobre defeitos de fabricação 
      e problemas
      relacionados ao desempenho normal do 
      produto.
      Se você encontrar qualquer problema 
      coberto pela garantia
      durante o período especificado, 
      entre em contato conosco
      para solicitar assistência.\n\n
      3. **Exclusões da Garantia:**
      A garantia não cobre danos causados 
      por uso indevido,
      negligência, acidentes, modificações 
      não autorizadas
      ou desgaste normal do produto.
      Qualquer alteração feita no produto 
      por terceiros
      que não sejam autorizados por nós 
      pode invalidar a garantia.\n\n
      4. **Processo de Reclamação:**
      Se você precisar acionar a garantia, 
      entre em contato conosco
      o mais rápido possível.
      Será necessário fornecer informações 
      detalhadas sobre o problema,
      juntamente com evidências fotográficas, 
      se aplicável.
      Faremos o possível para resolver o 
      problema de forma rápida e eficiente.
      Estamos comprometidos em fornecer produtos 
      de alta qualidade
      e garantir sua satisfação.
      Se você tiver alguma dúvida sobre nossa 
      política de garantia,
      não hesite em entrar em contato conosco.\n\n`,
    },

    entregas: {
      title: "Política de Entregas",
      text: `**Prazos de Entrega:**
      Os prazos de entrega podem variar 
      de acordo com a localidade,
      tipo de produto e disponibilidade 
      do estoque.
      Durante o processo de compra, 
      você será informado
      sobre o prazo estimado de entrega 
      para o seu endereço.\n\n
      **Cobertura de Entrega:**
      Entregamos para todo o país, abrangendo 
      diversas regiões.
      No entanto, algumas áreas remotas podem 
      ter prazos de entrega mais longos
      ou exigir taxas adicionais.
      Verifique a disponibilidade de 
      entrega para o seu CEP
      durante o processo de compra.\n\n
      **Acompanhamento da Entrega:**
      Assim que o pedido for despachado,
      você receberá informações de 
      rastreamento
      para acompanhar o status da entrega.
      Isso permitirá que você saiba quando 
      esperar pelo seu pacote
      e esteja preparado para recebê-lo.\n\n
      **Recepção do Pedido:**
      Ao receber seu pedido, recomendamos 
      que você confira cuidadosamente
      os itens entregues.
      Verifique se tudo está de acordo com 
      o que foi solicitado
      e se não há danos visíveis na 
      embalagem ou nos produtos.\n\n
      **Alteração de Endereço:**
      Após a conclusão do pedido, não é possível
      alterar o endereço de entrega.
      Certifique-se de fornecer o endereço 
      correto durante o processo de compra
      para evitar contratempos na entrega.\n\n
      **Limitações da Entrega:**
      Não realizamos entregas em locais 
      que exigem guinchos,
      içamentos ou outras formas especiais 
      de transporte.
      Certifique-se de que o produto se 
      adequa às medidas das portas
      e espaços de sua residência para evitar 
      dificuldades na entrega.\n\n
      **Contato em Caso de Problemas:**
      Se houver qualquer problema com a entrega, 
      como atrasos ou danos nos produtos,
      entre em contato conosco imediatamente
      para que possamos resolver a situação da 
      melhor forma possível.`,
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
