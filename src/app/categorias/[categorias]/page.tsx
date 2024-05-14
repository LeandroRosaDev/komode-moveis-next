// import { PageParams } from "@/interfaces/Produtos-types";

// export default async function categoriasPage({ params }: PageParams) {
//   const token = process.env.ACCESS_TOKEN;
//   const response = await fetch(
//     `https://apikomode.altuori.com/wp-json/api/produto?categoria=${params.categorias}`,
//     {
//       cache: "no-store",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   const data = await response.json();

//   return (
//     <section>
//       <div>
//         {data.map((produtos: any) => {
//           <div key={produtos.id}>{produtos.nome}</div>;
//         })}
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { PageParams } from "@/interfaces/Produtos-types";
import Link from "next/link";
const CategoriasPage = ({ params }: PageParams) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      const token = process.env.ACCESS_TOKEN;
      const url = `https://apikomode.altuori.com/wp-json/api/produto?categoria=${params.categorias}`;

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

        const data = await response.json();
        console.log("Dados recebidos:", data); // Logging para verificar os dados
        if (!data || data.length === 0) {
          throw new Error("Nenhum produto encontrado");
        }

        setProdutos(data);
      } catch (error) {
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
      <div>
        {produtos.map((produto) => (
          <div key={produto.id}>
            {produto.nome}{" "}
            <Link href={`/produtos/${produto.id}`}>Ver detalhes</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriasPage;
