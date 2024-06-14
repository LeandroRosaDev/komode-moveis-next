"use client";

import { PageParams } from "@/interfaces/Produtos-types";
import Image from "next/image";
import style from "./produtos.module.css";
import { token } from "@/app/api/api";
import { useState, useEffect } from "react";
import CategoriasMenu from "@/componentes/produtosComponentes/categorias/CategoriasMenu";
import { ButtonBack } from "@/componentes/ButtonBack";
import LoadingComponent from "@/componentes/loadingComponentes/LoadingProduto";

export default function ProdutoPage({ params }: PageParams) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://apikomode.altuori.com/wp-json/api/produto/${params.produto}`,
        {
          cache: "no-store",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [params.produto]);

  if (!data) {
    return (
      <main style={{ width: "100%" }}>
        {" "}
        <CategoriasMenu /> <LoadingComponent />
      </main>
    );
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.fotos.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.fotos.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <section className={style.produtoPage}>
      <CategoriasMenu />
      <ButtonBack>Voltar</ButtonBack>
      <div className={style.content}>
        <div className={style.produtoContainer}>
          <div className={style.produtoImages}>
            <div className={style.imageContainer}>
              <button className={style.navButton} onClick={handlePrevClick}>
                &lt;
              </button>
              <Image
                src={data.fotos[currentIndex].src}
                alt={data.fotos[currentIndex].titulo}
                width={600}
                height={500}
                className={style.mainImage}
              />
              <button className={style.navButton} onClick={handleNextClick}>
                &gt;
              </button>
            </div>
            <div className={style.thumbnailContainer}>
              {data.fotos.map((foto: any, index: number) => (
                <Image
                  key={index}
                  src={foto.src}
                  alt={foto.titulo}
                  width={100}
                  height={80}
                  className={`${style.thumbnail} ${
                    currentIndex === index ? style.activeThumbnail : ""
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
          <div className={style.produtoInfo}>
            <h1>{data.nome}</h1>
            <div className={style.preco}>
              <span className={style.precoOriginal}>
                De: {data.preco_original}
              </span>
              <span className={style.precoDesconto}>Por: {data.preco}</span>
              <span className={style.precoParcelado}>
                Ou 12x de: {data.preco_parcelado}
              </span>
            </div>
            <div className={style.cores}>
              <h3>Cor:</h3>
              {/* {data.cores.map((cor: string, index: number) => ( */}
              <span
                // key={index}
                className={style.cor}
                // style={{ backgroundColor: cor }}
              ></span>
              {/* // ))} */}
            </div>
            <a
              target="blank"
              href={data.link_1}
              className={style.whatsappButton}
            >
              Compre via WhatsApp
            </a>
            <p>Pagamento realizado no ato da Entrega</p>
          </div>
        </div>
        <div className={style.descricaoContainer}>
          <ul className={style.descricaoMenu}>
            <li>Descrição</li>
            <li>Informações adicionais</li>
          </ul>
          <div className={style.descricao}>
            <h3>
              {data.nome_long} {data.cor}
            </h3>
            <p>{data.descricao}</p>
            {data.altura && data.largura && data.profundidade_aberto && (
              <>
                <h3>Medidas:</h3>
                <p>Altura: {data.altura}m</p>
                <p>Largura: {data.largura}m</p>
                <p>Profundidade: {data.profundidade_aberto}m</p>
                {data.profundidade_fechado && (
                  <p>
                    Profundidade fechado(sofás retráteis):{" "}
                    {data.profundidade_fechado}m
                  </p>
                )}
              </>
            )}
            {data.assento && (
              <>
                <h3>Assento:</h3>
                <p>{data.assento}</p>
              </>
            )}
            {data.encosto && (
              <>
                <h3>Encosto:</h3>
                <p>{data.encosto}</p>
              </>
            )}
            {data.estrutura && (
              <>
                <h3>Características:</h3>
                <p>{data.estrutura}</p>
              </>
            )}
            {data.braco && (
              <>
                <h3>Braços:</h3>
                <p>{data.braco}</p>
              </>
            )}
            <p style={{ marginTop: "2rem" }}>
              * As imagens dos produtos são meramente ilustrativas. As cores
              podem sofrer variações dependendo da luminosidade, tipo de câmera
              ou mesmo da visualização das imagens em computadores, notebooks
              com telas LCD ou LED, tablets ou smartphones, dependendo da
              quantidade de pixels, podendo deixar as imagens com cores mais
              opacas ou cores mais vibrantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
