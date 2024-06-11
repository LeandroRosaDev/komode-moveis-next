import FiltroComponent from "@/componentes/FiltroComponente";
import GetProdutosDestaque from "@/componentes/produtosComponentes/Get-Produtos-Destaque";
import CategoriasMenu from "@/componentes/produtosComponentes/categorias/CategoriasMenu";

export default function ProdutosPage() {
  return (
    <main style={{ width: "100%" }}>
      <CategoriasMenu />
      <GetProdutosDestaque />
    </main>
  );
}
