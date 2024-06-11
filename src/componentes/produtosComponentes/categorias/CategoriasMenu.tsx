import style from "./produtos.module.css";
import icon1 from "@/../public/assets/produtos/1.png";
import icon2 from "@/../public/assets/produtos/2.png";
import icon3 from "@/../public/assets/produtos/3.png";
import icon4 from "@/../public/assets/produtos/4.png";
import icon5 from "@/../public/assets/produtos/5.png";
import icon6 from "@/../public/assets/produtos/6.png";
import icon7 from "@/../public/assets/produtos/7.png";
import Image from "next/image";
import Link from "next/link";
export default function CategoriasMenu() {
  return (
    <main>
      <div className={style.bg}>
        <h1>Produtos</h1>
        <p>Confira abaixo todos os produtos disponíveis em nosso estoque</p>
      </div>
      <div className={style.gridCategorias}>
        <Link href="/subcategorias/sofa retratil">
          <Image src={icon1} alt="Icone de um sofá" width={150} />
          <p>Sofás</p>
        </Link>
        <Link href="/subcategorias/escritorio">
          <Image src={icon2} alt="Icone de um sofá" width={150} />
          <p>Escritório</p>
        </Link>
        <Link href="/subcategorias/banheiro">
          <Image src={icon3} alt="Icone de um sofá" width={150} />
          <p>Banheiro</p>
        </Link>
        <Link href="/subcategorias/balcao de cozinha">
          <Image src={icon4} alt="Icone de um sofá" width={150} />
          <p>Cozinha</p>
        </Link>
        <Link href="/subcategorias/cama de casal">
          <Image src={icon5} alt="Icone de um sofá" width={150} />
          <p>Cama de Casal</p>
        </Link>
        <Link href="/subcategorias/guarda roupa de solteiro">
          <Image src={icon6} alt="Icone de um sofá" width={150} />
          <p>Guarda Roupas</p>
        </Link>
        <Link href="/subcategorias/mesa de jantar">
          <Image src={icon7} alt="Icone de um sofá" width={150} />
          <p>Mesas de Jantar</p>
        </Link>
      </div>
    </main>
  );
}
