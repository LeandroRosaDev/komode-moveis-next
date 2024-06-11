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
    <section>
      <div className={style.gridProdutosContainer}>
        <div className={style.gridContainer}>
          {produtos.map((produto: any) => (
            <div key={produto.id} className={style.gridProdutosContent}>
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
              <h2>
                {produto.nome} {produto.largura}m
              </h2>
              <p>De: {produto.preco}</p>
              <p>Por: {produto.preco}</p>
              <p>Ou no cartão em até 12x de: {produto.preco}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
