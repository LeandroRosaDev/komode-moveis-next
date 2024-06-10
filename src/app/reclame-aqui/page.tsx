"use client";

import PostReclamacao from "@/componentes/reclamacao/PostReclamacao";
import style from "../../componentes/reclamacao/reclamacao.module.css";

export default function reclamacaoPage() {
  return (
    <section style={{ width: "100%" }}>
      <div className={style.bg}>
        <h1>Reclame aqui</h1>
      </div>
      <h1 className="mainTitle">Registre a sua Reclamação </h1>
      <p className="secondTitle" style={{ margin: "2rem 6rem" }}>
        Nós da Komode nos importamos muito com a sua reclamação, por favor
        preencha os campos abaixo para que possamos investigar e resolver a sua
        solicitação o mais rapido possível
      </p>
      <PostReclamacao />
    </section>
  );
}
