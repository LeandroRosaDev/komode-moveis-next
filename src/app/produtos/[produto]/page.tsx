import { PageParams } from "@/interfaces/Produtos-types";
import Image from "next/image";

export default async function produtoPage({ params }: PageParams) {
  const token = process.env.ACCESS_TOKEN;
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
    <section>
      <h1>Produto</h1>
      <p>{data.produto_cod}</p>
      <p>{data.cor}</p>
      <p>{data.estrutura}</p>
      {/* Exibindo a primeira imagem separadamente */}
      {data.fotos.length > 0 && (
        <div>
          <h2>Primeira Imagem:</h2>
          <Image
            src={data.fotos[0].src}
            alt={data.fotos[0].titulo}
            width={500}
            height={400}
          />
        </div>
      )}
      {/* Exibindo todas as imagens */}
      <div>
        <h2>Todas as Imagens:</h2>
        {data.fotos.map((foto: any, index: any) => (
          <Image
            key={index}
            src={foto.src}
            alt={foto.titulo}
            width={200}
            height={100}
          />
        ))}
        <a target="blank" href={data.link_1}>
          Clique aqui e saiba mais
        </a>
      </div>
    </section>
  );
}
