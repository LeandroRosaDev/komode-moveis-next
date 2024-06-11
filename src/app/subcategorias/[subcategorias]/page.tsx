"use client";
import { useEffect, useState } from "react";
import { PageParams, Produto } from "@/interfaces/Produtos-types";
import Link from "next/link";
import Image from "next/image";
import { token } from "@/app/api/api";
import CategoriasMenu from "@/componentes/produtosComponentes/categorias/CategoriasMenu";
import style from "./subcategorias.module.css";
import FiltroComponent from "@/componentes/FiltroComponente";

const SubCategoriasPage = ({ params }: PageParams) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      const url = `https://apikomode.altuori.com/wp-json/api/produto?sub_categoria=${params.subcategorias}&`;

      try {
        const response = await fetch(url, {
          cache: "no-store",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Falha ao buscar dados");
        }

        const data: any = await response.json();
        if (!data || data.length === 0) {
          throw new Error("Nenhum produto encontrado");
        }

        setProdutos(data);
      } catch (error: any) {
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
    <section className={style.section}>
      <CategoriasMenu />

      <h1>Exibindo todos os produtos disponíveis</h1>
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
    </section>
  );
};

export default SubCategoriasPage;
