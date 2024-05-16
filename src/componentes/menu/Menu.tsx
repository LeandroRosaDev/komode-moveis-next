import Link from "next/link";
import style from "./Menu.module.css";
import logotipo from "@/../public/assets/logotipo.png";
import socialIcon1 from "@/../public/assets/menu-social-logo-1.png";
import socialIcon2 from "@/../public/assets/menu-social-logo-2.png";
import socialIcon3 from "@/../public/assets/menu-social-logo-3.png";
import Image from "next/image";

export default async function Menu() {
  return (
    <nav className={style.navContainer}>
      <ul className={style.menuSocialContainer}>
        <li>
          <a href="">
            <Image src={socialIcon1} alt="icone social" width={25} />
          </a>
        </li>
        <li>
          <a href="">
            <Image src={socialIcon2} alt="icone social" width={25} />
          </a>
        </li>
        <li>
          <a href="">
            <Image src={socialIcon3} alt="icone social" width={25} />
          </a>
        </li>
      </ul>
      <div className={style.menu}>
        <Link href="/">
          <Image src={logotipo} alt="logotipo" width={150} height={50} />
        </Link>
        <ul className={style.desktopMenu}>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li className={style.subMenu}>
            <Link href="/produtos">Produtos</Link>
            <ul className={style.hiddenMenu}>
              <li className={style.subMenu}>
                <Link href="/Sala de Estar"> Sala de Estar </Link>
                <ul className={style.hiddenMenu}>
                  <li>
                    <Link href="/Sala de Estar"> Sala de Estar </Link>
                  </li>
                  <li>
                    <Link href="/Quarto de Casal"> Quarto de Casal </Link>
                  </li>
                  <li>
                    <Link href="/Quarto de Solteiro"> Quarto de Solteiro </Link>
                  </li>
                  <li>
                    <Link href="/Cozinha"> Cozinha </Link>
                  </li>
                  <li>
                    <Link href="/Lavanderia"> Lavanderia </Link>
                  </li>
                  <li>
                    <Link href="/Escritorio"> Escritorio </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/Quarto de Casal"> Quarto de Casal </Link>
              </li>
              <li>
                <Link href="/Quarto de Solteiro"> Quarto de Solteiro </Link>
              </li>
              <li>
                <Link href="/Cozinha"> Cozinha </Link>
              </li>
              <li>
                <Link href="/Lavanderia"> Lavanderia </Link>
              </li>
              <li>
                <Link href="/Escritorio"> Escritorio </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/sobre"> Sobre Nós </Link>
          </li>
          <li>
            <Link href="/contato"> Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
