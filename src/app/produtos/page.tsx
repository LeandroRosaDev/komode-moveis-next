import style from "./produtos.module.css";
import icon1 from "@/../public/assets/produtos/1.png";
import icon2 from "@/../public/assets/produtos/2.png";
import icon3 from "@/../public/assets/produtos/3.png";
import icon4 from "@/../public/assets/produtos/4.png";
import icon5 from "@/../public/assets/produtos/5.png";
import icon6 from "@/../public/assets/produtos/6.png";
import icon7 from "@/../public/assets/produtos/7.png";
import GetProdutosDestaque from "@/componentes/produtosComponentes/Get-Produtos-Destaque";
import Image from "next/image";
import Link from "next/link";
export default function ProdutosPage() {
  return (
    <main style={{ width: "100%" }}>
      <div className={style.bg}>
        <h1>Produtos</h1>
        <p>Confira abaixo todos os produtos disponíveis em nosso estoque</p>
      </div>
      <div className={style.gridCategorias}>
        <Link href="categorias/Sala de estar">
          <Image src={icon1} alt="Icone de um sofá" width={150} />
          <p>Sofás</p>
        </Link>
        <Link href="categorias/escritorio">
          <Image src={icon2} alt="Icone de um sofá" width={150} />
          <p>Escritório</p>
        </Link>
        <Link href="categorias/banheiro">
          <Image src={icon3} alt="Icone de um sofá" width={150} />
          <p>Banheiro</p>
        </Link>
        <Link href="categorias/cozinha">
          <Image src={icon4} alt="Icone de um sofá" width={150} />
          <p>Cozinha</p>
        </Link>
        <Link href="categorias/camas">
          <Image src={icon5} alt="Icone de um sofá" width={150} />
          <p>Camas</p>
        </Link>
        <Link href="categorias/guarda-roupas">
          <Image src={icon6} alt="Icone de um sofá" width={150} />
          <p>Guarda Roupas</p>
        </Link>
        <Link href="categorias/mesa-de-jantar">
          <Image src={icon7} alt="Icone de um sofá" width={150} />
          <p>Mesas de Jantar</p>
        </Link>
      </div>
      <GetProdutosDestaque />
    </main>
  );
}
