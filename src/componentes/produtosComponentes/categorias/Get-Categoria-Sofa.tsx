"use client";
import React, { useState, useEffect } from "react";
import { Produto } from "@/interfaces/Produtos-types";
import { getSofaAction } from "@/actions/produtos/categorias/get-sofa-action";
import Image from "next/image";
import style from "./GetProdutosDestaque.module.css";
import Link from "next/link";

export default function GetCategoriaSofa() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await getSofaAction();
      setProdutos(data);
    }
    loadProducts();
  }, []);

  return (
    <section>
      <div className={style.gridProdutosContainer}>
        {produtos.map((produto) => (
          <div className={style.gridProdutosContent} key={produto.id}>
            {produto.fotos && produto.fotos.length > 0 && (
              <Image
                src={produto.fotos[1].src}
                alt={`Imagem de ${produto.nome}`}
                width={400}
                height={300}
              />
            )}
            <h1>
              {produto.produto_cod} {""}
              {produto.cor}
            </h1>
            <h3>R$ {produto.preco}</h3>
            <Link href={`/produto/${produto.id}`}>Ver detalhes</Link>
          </div>
        ))}
      </div>
      <Link href="">
        <button className={style.button}>Veja nosso estoque!</button>
      </Link>
    </section>
  );
}
