import Link from "next/link";
import style from "./footerPage.module.css";
import Image from "next/image";
import socialIcon1 from "../../../public/assets/footer-social-1.png";
import socialIcon2 from "../../../public/assets/footer-social-2.png";
import socialIcon3 from "../../../public/assets/footer-social-3.png";
export default async function FooterPage() {
  return (
    <footer className="container">
      <section className={style.highFooter}>
        <div className={style.contato}>
          <div className={style.endereco}>
            <h1>
              Visite nosso <br /> show room
            </h1>
            <p>Av. Dr Délio Guaraná nº000 São João de Meriti, RJ</p>
            <p>Seg - De: 08 as: 18 pm | Sáb: 08 am - 12 pm</p>
          </div>
          <div className={style.telefone}>
            <Link className="buttonTransparent" href="">
              Encontre-nos
            </Link>

            <a href="" style={{ color: "#a80e00", fontSize: "2rem" }}>
              (21)2100 0000
            </a>
          </div>
        </div>
        <div className={style.linksUteis}>
          <div>
            <h1>Encontre Aqui</h1>
            <Link href="/">Inicio</Link>
            <Link href="/produto">Produtos</Link>
            <Link href="/categorias">Categorias</Link>
          </div>
          <div>
            <h1>Links Diretos</h1>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/duvidas">Dúvidas</Link>
          </div>
          <div>
            <h1>Política da loja</h1>
            <Link href="/trocas">Trocas</Link>
            <Link href="/garantia">Garantia</Link>
            <Link href="/reclamacoes">Reclame Aqui</Link>
          </div>
        </div>
      </section>
      <section className={style.lowFooter}>
        <div>
          <a href="">
            <Image src={socialIcon1} alt="Ícone do facebook" />
          </a>
          <a href="">
            <Image src={socialIcon2} alt="Ícone do Instagram" />
          </a>
          <a href="">
            <Image src={socialIcon3} alt="Ícone do whatsapp" />
          </a>
        </div>
        <p>Todos os direitos reservados</p>
        <p>
          Esta é uma empresa do <a href="">Grupo Altuori</a>
        </p>
      </section>
    </footer>
  );
}
