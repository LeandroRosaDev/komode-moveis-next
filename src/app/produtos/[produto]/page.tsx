import { PageParams } from "@/interfaces/Produtos-types";
import Image from "next/image";
import style from "./produtos.module.css";
import { token } from "@/app/api/api";

export default async function produtoPage({ params }: PageParams) {
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

  return (
    <section className={style.produtoPage}>
      <div className={style.bg}>
        <h1>Produtos</h1>
        <p>Confira abaixo todos os produtos disponíveis em nosso estoque</p>
      </div>
      <a href="/" className={style.voltar}>
        Voltar
      </a>
      <div className={style.content}>
        <div className={style.produtoContainer}>
          <div className={style.produtoImages}>
            <Image
              src={data.fotos[0].src}
              alt={data.fotos[0].titulo}
              width={400}
              height={300}
              className={style.mainImage}
            />
            <div className={style.thumbnailContainer}>
              {data.fotos.map((foto: any, index: any) => (
                <Image
                  key={index}
                  src={foto.src}
                  alt={foto.titulo}
                  width={100}
                  height={80}
                  className={style.thumbnail}
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
            <a href={data.link_1} className={style.whatsappButton}>
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
            <h3>Medidas:</h3>
            <p>Altura: {data.altura}m</p>
            <p>Largura: {data.largura}m</p>
            <p>Profundidade do sofá aberto: {data.profundidade_aberto}m</p>
            <p>Profundidade do sofá fechado: {data.profundidade_fechado}m</p>
            <h3>Assento:</h3>
            <p>{data.assento}</p>
            <h3>Encosto:</h3>
            <p>{data.encosto}</p>
            <h3>Características:</h3>
            <p>{data.estrutura}</p>
            <h3>Braços:</h3>
            <p>{data.braco}</p>
            <p>
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
