import Image from "next/image";
import style from "./GetProdutosDestaque.module.css";
import produto1 from "@/../public/assets/produto-img-1.png";

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
      <a href="">
        <button>Veja nosso estoque!</button>
      </a>
    </div>
  );
}
