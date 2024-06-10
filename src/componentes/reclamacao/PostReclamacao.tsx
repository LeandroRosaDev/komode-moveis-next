"use client";

import { useState, useRef } from "react";
import { postReclamacaoAction } from "@/actions/reclamacoes/post-reclamacoes-action";
import style from "./reclamacao.module.css";

export default function PostReclamacao() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (event: any) => {
    const form = event.target.form;
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const tipoReclamacao = form.tipo_reclamacao.value.trim();
    const reclamacao = form.reclamacao.value.trim();

    if (nome && email && telefone && tipoReclamacao && reclamacao) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        window.location.reload();
      }, 5000);
    }
  };

  return (
    <>
      <form
        action={postReclamacaoAction}
        className={style.container}
        method="POST"
      >
        <h2 className={style.heading}>Formulário de Reclamação</h2>
        <div className={style.formGroup}>
          <label htmlFor="nome" className={style.label}>
            Nome:
          </label>
          <input
            placeholder="Insira seu nome"
            name="nome"
            id="nome"
            type="text"
            className={style.input}
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email" className={style.label}>
            E-mail:
          </label>
          <input
            placeholder="Insira seu E-mail"
            name="email"
            id="email"
            type="email"
            className={style.input}
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="telefone" className={style.label}>
            Telefone:
          </label>
          <input
            placeholder="Insira um número para contato"
            name="telefone"
            id="telefone"
            type="tel"
            className={style.input}
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="tipo_reclamacao" className={style.label}>
            Tipo de Reclamação:
          </label>
          <select
            id="tipo_reclamacao"
            name="tipo_reclamacao"
            className={style.select}
          >
            <option value="">Selecione um tipo</option>
            <option value="Garantia">Garantia</option>
            <option value="Pagamento">Pagamento</option>
            <option value="Entrega">Entrega</option>
            <option value="Atendimento">Atendimento</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className={style.formGroup}>
          <label htmlFor="reclamacao" className={style.label}>
            Reclamação:
          </label>
          <textarea
            placeholder="Conte-nos sobre a sua reclamação"
            name="reclamacao"
            id="reclamacao"
            className={style.textarea}
          />
        </div>
        <button type="submit" className={style.button} onClick={handleClick}>
          Enviar
        </button>
      </form>

      {showModal && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <span
              className={style.closeButton}
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <h1>Komode Móveis</h1>
            <p>
              Sua reclamação foi registrada com sucesso, agradecemos pelo
              feedback!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
