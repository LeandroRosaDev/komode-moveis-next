import Link from "next/link";
import style from "./footerPage.module.css";
import Image from "next/image";
export default async function FooterPage() {
  return (
    <footer>
      <section className={style.highFooter}>
        <div className={style.contato}>
          <div>
            <h1>Visite nosso show room</h1>
            <p>Av. Dr Délio Guaraná nº000 São João de Meriti, RJ</p>
            <p>Seg - De: 08 as: 18 pm | Sáb: 08 am - 12 pm</p>
          </div>
          <div>
            <button>
              <Link href="">Encontre-nos</Link>
            </button>
            <a href="">(21)2100 0000</a>
          </div>
        </div>
        <div className={style.linksUteis}>
          <div>
            <h1>Encontre Aqui</h1>
            <Link href="">Inicio</Link>
            <Link href="">Produtos</Link>
            <Link href="">Categorias</Link>
          </div>
          <div>
            <h1>Encontre Aqui</h1>
            <Link href="">Inicio</Link>
            <Link href="">Produtos</Link>
            <Link href="">Categorias</Link>
          </div>
          <div>
            <h1>Encontre Aqui</h1>
            <Link href="">Inicio</Link>
            <Link href="">Produtos</Link>
            <Link href="">Categorias</Link>
          </div>
        </div>
      </section>
      <section className={style.lowFooter}>
        <div>
          <Image src="" alt="" />
          <Image src="" alt="" />
          <Image src="" alt="" />
        </div>
        <p>Todos os direitos reservados</p>
        <p>
          Esta é uma empresa do <a href="">Grupo Altuori</a>
        </p>
      </section>
    </footer>
  );
}
