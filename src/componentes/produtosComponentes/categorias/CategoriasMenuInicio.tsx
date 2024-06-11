import style from "./CategoriasMenuInicio.module.css";
import Image from "next/image";
import Link from "next/link";
export default function CategoriasMenuInicio() {
  return (
    <main>
      <div className={style.gridCategorias}>
        <Link href="/categorias/Sala de Estar">
          <Image
            src="/assets/menu/13.svg"
            alt="Icone de um sofá"
            width={80}
            height={100}
          />
          <p>Sala de Estar</p>
        </Link>
        <Link href="/categorias/Quarto de Solteiro">
          <Image
            src="/assets/menu/11.svg"
            alt="Icone de um sofá"
            width={70}
            height={100}
          />
          <p>Quarto de Solteiro</p>
        </Link>
        <Link href="/categorias/Quarto de Casal">
          <Image
            src="/assets/menu/12.svg"
            alt="Icone de um sofá"
            width={70}
            height={100}
          />
          <p>Quarto de Casal</p>
        </Link>
        <Link href="/categorias/Cozinha">
          <Image
            src="/assets/menu/16.svg"
            alt="Icone de um sofá"
            width={70}
            height={100}
          />
          <p>Cozinha</p>
        </Link>
        <Link href="/categorias/Banheiro">
          <Image
            src="/assets/menu/8.svg"
            alt="Icone de um sofá"
            width={60}
            height={100}
          />
          <p>Banheiro</p>
        </Link>
        <Link href="/categorias/Escritorio">
          <Image
            src="/assets/menu/10.svg"
            alt="Icone de um sofá"
            width={70}
            height={100}
          />
          <p>Escritório</p>
        </Link>

        <Link href="/categorias/Lavanderia">
          <Image
            src="/assets/menu/15.svg"
            alt="lavanderia"
            width={60}
            height={100}
          />
          <p>Lavanderia</p>
        </Link>
      </div>
    </main>
  );
}
