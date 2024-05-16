"use client";
import React, { useState, useEffect } from "react";
import { Produto } from "@/interfaces/Produtos-types";
import { getProductsDestaqueAction } from "@/actions/produtos/get-produtos-destaque-action";
import Image from "next/image";
import style from "./GetProdutosDestaque.module.css";
import Link from "next/link";

export default function GetProdutosDestaque() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await getProductsDestaqueAction();
      setProdutos(data);
    }
    loadProducts();
  }, []);

  return (
    <section className="gridMain">
      <div className={style.gridProdutosContainer}>
        {produtos.map((produto) => (
          <div className={style.gridProdutosContent} key={produto.id}>
            {produto.fotos && produto.fotos.length > 0 && (
              <Link href={`/produtos/${produto.id}`}>
                <Image
                  src={produto.fotos[1].src}
                  alt={`Imagem de ${produto.nome}`}
                  width={300}
                  height={200}
                  className={style.image}
                />
              </Link>
            )}
            <div className={style.middle}>
              <Link className={style.text} href={`/produtos/${produto.id}`}>
                Ver detalhes
              </Link>
            </div>
            <div className={style.infoContent}>
              <h1>{produto.nome}</h1>
              <h5>De R$ 1599,00</h5>
              <h3>
                Por R$ {produto.preco} <span>no Pix</span>
              </h3>
              <h6>Ou em até 12x de R$ 363,00</h6>
            </div>
          </div>
        ))}
      </div>
      <Link href="">
        <button className={style.button}>Veja nosso estoque!</button>
      </Link>
    </section>
  );
}
