import style from "./produtos.module.css";
import icon1 from "@/../public/assets/produtos/1.png";
import icon2 from "@/../public/assets/produtos/2.png";
import icon3 from "@/../public/assets/produtos/3.png";
import icon4 from "@/../public/assets/produtos/4.png";
import icon5 from "@/../public/assets/produtos/5.png";
import icon6 from "@/../public/assets/produtos/6.png";
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
        <Link href="/categorias/Sala de Estar">
          <Image src={icon1} alt="Icone de um sofá" width={150} />
          <p>Sala de Estar</p>
        </Link>
        <Link href="/categorias/Quarto de Solteiro">
          <Image src={icon6} alt="Icone de um sofá" width={150} />
          <p>Quarto de Solteiro</p>
        </Link>
        <Link href="/categorias/Quarto de Casal">
          <Image src={icon5} alt="Icone de um sofá" width={150} />
          <p>Quarto de Casal</p>
        </Link>
        <Link href="/categorias/Cozinha">
          <Image src={icon4} alt="Icone de um sofá" width={150} />
          <p>Cozinha</p>
        </Link>
        <Link href="/categorias/Lavanderia">
          <Image src={icon3} alt="lavanderia" width={150} />
          <p>Lavanderia</p>
        </Link>
        <Link href="/categorias/Escritorio">
          <Image src={icon2} alt="Icone de um sofá" width={150} />
          <p>Escritório</p>
        </Link>
        <Link href="/categorias/Banheiro">
          <Image src={icon3} alt="Icone de um sofá" width={150} />
          <p>Banheiro</p>
        </Link>
      </div>
    </main>
  );
}
