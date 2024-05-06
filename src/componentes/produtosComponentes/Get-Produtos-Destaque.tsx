import Image from "next/image";
import style from "./GetProdutosDestaque.module.css";
import produto1 from "@/../public/assets/produto-img-1.png";
import Link from "next/link";

export default async function GetProdutosDestaque() {
  return (
    <div>
      <div className={style.gridProdutosContent}>
        <a href="">
          <Image src={produto1} alt="imagem do produto" />
        </a>
        <h1>Conjunto Porto</h1>
        <p>R$ 799,00</p>
      </div>
      <Link href="">
        <button className={style.button}>Veja nosso estoque!</button>
      </Link>
    </div>
  );
}
