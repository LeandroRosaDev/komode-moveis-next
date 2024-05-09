import { PageParams } from "@/interfaces/Produtos-types";
import Image from "next/image";

export default async function produtoPage({ params }: PageParams) {
  const response = await fetch(
    `https://apikomode.altuori.com/wp-json/api/produto/${params.produto}`,
    {
      cache: "no-store",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaWtvbW9kZS5hbHR1b3JpLmNvbSIsImlhdCI6MTcxNTI5MTQwOSwibmJmIjoxNzE1MjkxNDA5LCJleHAiOjE3MTUzNzc4MDksImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.t1HbLyICmPQISK03WALV5KvXPZKfR8-yd6KmrSkEr0Q",
      },
    }
  );
  const data = await response.json();

  return (
    <section>
      <h1>Produto</h1>
      <p>{data.produto_cod}</p>
      <p>{data.cor}</p>
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
