import Link from "next/link";
import style from "./footerPage.module.css";
import Image from "next/image";
import socialIcon1 from "../../../public/assets/footer-social-1.png";
import socialIcon2 from "../../../public/assets/footer-social-2.png";
import socialIcon3 from "../../../public/assets/footer-social-3.png";
export default async function FooterPage() {
  return (
    <footer className={style.containerFooter}>
      <section className={style.highFooter}>
        <div className={style.contato}>
          <div className={style.endereco}>
            <h1>Visite nosso show room</h1>
            <p>Rua Pires do rio nº509 São João de Meriti, RJ</p>
            <p>Seg - De: 08 as: 18 pm | Sáb: 08 am - 12 pm</p>
          </div>
          <div className={style.telefone}>
            <Link
              className="buttonTransparent"
              href="https://www.google.com/maps/place/AL+M%C3%B3veis+e+Estofados/@-22.7869933,-43.3969211,21z/data=!4m20!1m13!4m12!1m4!2m2!1d-43.3946624!2d-22.7835904!4e1!1m6!1m2!1s0x99643b2a103ebb:0xd822b89acf0de156!2sjm+rodrigues!2m2!1d-43.3967886!2d-22.7872351!3m5!1s0x996569cf804ddb:0xbf605c5e51e6ef5c!8m2!3d-22.7869932!4d-43.3966233!16s%2Fg%2F11fltq5wrn?entry=ttu"
            >
              <Image
                src="/assets/icon/location.svg"
                width={20}
                height={20}
                alt="local"
              />
              Encontre-nos
            </Link>
            <div style={{ display: "flex", gap: "2px" }}>
              <Image
                src="/assets/icon/Phone.svg"
                width={30}
                height={30}
                alt="local"
              />
              <a
                href=""
                style={{
                  color: "#a80e00",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                (21)9 7899-1540
              </a>
            </div>
          </div>
        </div>
        <hr className={style.linha} />
        <div className={style.linksUteis}>
          <div>
            <h1>Encontre Aqui</h1>
            <Link href="/">Inicio</Link>
            <Link href="/produtos">Produtos</Link>
            <Link href="/produtos">Categorias</Link>
          </div>
          <div>
            <h1>Links Diretos</h1>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/duvidas">Dúvidas</Link>
          </div>
          <div>
            <h1>Política da loja</h1>
            <Link href="/politicas">Trocas</Link>
            <Link href="/politicas">Garantia</Link>
            <Link href="/reclame-aqui">Reclame Aqui</Link>
          </div>
        </div>
      </section>
      <section className={style.lowFooter}>
        <div>
          <a
            target="blank"
            href="https://www.facebook.com/komodemoveisedecorados"
          >
            <Image src={socialIcon1} alt="Ícone do facebook" />
          </a>
          <a target="blank" href="https://www.instagram.com/komodemd/">
            <Image src={socialIcon2} alt="Ícone do Instagram" />
          </a>
          <a
            target="blank"
            href="//api.whatsapp.com/send?phone=5521978991540&text=Olá tudo bem? Gostaria de saber mais sobre as promoções disponíveis para mim! Eu vim através do site de vocês!!
"
          >
            <Image src={socialIcon3} alt="Ícone do whatsapp" />
          </a>
        </div>
        <div className={style.direitosFooter}>
          <p>Todos os direitos reservados.</p>
          <p>
            Esta é uma empresa do{" "}
            <a
              style={{ fontWeight: "bold" }}
              target="blank"
              href="https://altuori.com/"
            >
              Grupo Altuori
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
}
