// componentes/produtosComponentes/CategoriasPage.tsx
"use client";
import { useEffect, useState, useCallback } from "react";
import { PageParams } from "@/interfaces/Produtos-types";
import Link from "next/link";
import Image from "next/image";
import style from "./categorias.module.css";
import { token } from "@/app/api/api";
import CategoriasMenu from "@/componentes/produtosComponentes/categorias/CategoriasMenu";
import FiltroComponent from "@/componentes/FiltroComponente";

const CategoriasPage = ({ params }: PageParams) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState<Record<string, string>>({});

  const fetchProdutos = useCallback(async () => {
    let url = `https://apikomode.altuori.com/wp-json/api/produto?categoria=${params.categorias}`;
    Object.keys(filters).forEach((key) => {
      url += `&${key}=${filters[key]}`;
    });

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
  }, [params, filters]);

  useEffect(() => {
    fetchProdutos();
  }, [fetchProdutos]);

  const handleFilterChange = (newFilters: Record<string, string>) => {
    setFilters(newFilters);
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <section style={{ width: "100%" }}>
      <CategoriasMenu />
      <h1 style={{ textAlign: "center", margin: "2rem" }}>
        Exibindo todos os produtos para{" "}
        {decodeURIComponent(params.categorias).replace(/%20/g, " ")}
      </h1>
      <div className={style.mainContainer}>
        <FiltroComponent params={params} onFilterChange={handleFilterChange} />

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
                <div className={style.textDescription}>
                  <h2>{produto.nome}</h2>
                  <p className={style.precoOriginal}>
                    De: {produto.preco_original}
                  </p>
                  <p className={style.precoDesconto}>
                    Por: {produto.preco} <span>a vista</span>
                  </p>
                  <p className={style.precoParcelado}>
                    Ou no cartão em até 12x de: {produto.preco_parcelado}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriasPage;
