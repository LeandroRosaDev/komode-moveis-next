"use client";
import React, { useState, useEffect } from "react";
import { Produto } from "@/interfaces/Produtos-types";
import { getProductsDestaqueAction } from "@/actions/produtos/get-produtos-destaque-action";
import Image from "next/image";
import style from "./GetProdutosDestaque.module.css";
import Link from "next/link";

export default function GetProdutosDestaque() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await getProductsDestaqueAction();
        if (data && data.length > 0) {
          setProdutos(data);
        } else {
          setProdutos([]);
        }
      } catch (err) {
        setError(
          "Não foi possível carregar os produtos. Por favor, tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (loading) {
    return <div className={style.loading}>Carregando...</div>;
  }

  if (error) {
    return <div className={style.error}>{error}</div>;
  }

  return (
    <section className="gridMain">
      <div className={style.gridProdutosContainer}>
        {produtos.length > 0 ? (
          produtos.map((produto) => (
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
          ))
        ) : (
          <div className={style.noProducts}>Nenhum produto encontrado.</div>
        )}
      </div>
      <Link href="">
        <button className={style.button}>Veja nosso estoque!</button>
      </Link>
    </section>
  );
}
