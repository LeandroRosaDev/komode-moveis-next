"use client";
import { useEffect, useState } from "react";
import { PageParams } from "@/interfaces/Produtos-types";
import Link from "next/link";
import Image from "next/image";
import style from "@/componentes/produtosComponentes/GetProdutosDestaque.module.css";

const CategoriasPage = ({ params }: PageParams) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      const url = `https://apikomode.altuori.com/wp-json/api/produto?categoria=${params.categorias}&_limit=8`;

      try {
        const response = await fetch(url, {
          cache: "no-store",
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaWtvbW9kZS5hbHR1b3JpLmNvbSIsImlhdCI6MTcxNTY0NDgwMCwibmJmIjoxNzE1NjQ0ODAwLCJleHAiOjI1Nzk2NDQ4MDAsImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.tQ-Uuz58JbI2ksAdPJz-6OaBh6TUAE31jsbg84oXshQ",
          },
        });

        if (!response.ok) {
          throw new Error("Falha ao buscar dados");
        }

        const data: any = await response.json();
        console.log("Dados recebidos:", data);
        if (!data || data.length === 0) {
          throw new Error("Nenhum produto encontrado");
        }

        setProdutos(data);
      } catch (error: any) {
        console.error("Erro na requisição:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, [params]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <section>
      <div className={style.gridProdutosContainer}>
        {produtos.map((produto: any) => (
          <div className={style.gridProdutosContent} key={produto.id}>
            {produto.fotos && produto.fotos.length > 0 && (
              <Link href={`/produtos/${produto.id}`}>
                <Image
                  className={style.image}
                  src={produto.fotos[1].src}
                  alt={`Imagem de ${produto.nome}`}
                  width={300}
                  height={100}
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
    </section>
  );
};

export default CategoriasPage;
