'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import style from './Menu.module.css';
import logotipo from '@/../public/assets/logotipo.png';
import socialIcon1 from '@/../public/assets/icon/menu-icon-1.svg';
import socialIcon2 from '@/../public/assets/icon/menu-icon-2.svg';
import socialIcon3 from '@/../public/assets/icon/menu-icon-3.svg';
import Image from 'next/image';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

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
      <div className={style.menu} ref={menuRef}>
        <Link href="/">
          <Image
            src={logotipo}
            alt="logotipo"
            width={100}
            height={100}
            style={{ borderRadius: '100%' }}
          />
        </Link>
        <div style={{ position: 'relative' }}>
          <button
            className={`${style.hamburger} ${menuOpen ? style.open : ''}`}
            onClick={toggleMenu}
          >
            <div className={style.bar1}></div>
            <div className={style.bar2}></div>
            <div className={style.bar3}></div>
          </button>
          <ul className={`${style.desktopMenu} ${menuOpen ? style.open : ''}`}>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li className={style.subMenu}>
              <Link href="/produtos">Produtos</Link>
              <ul className={style.secondMenu}>
                <li className={style.subMenu}>
                  <Link href="/categorias/Sala de Estar"> Sala de Estar </Link>
                </li>
                <li>
                  <Link href="/categorias/Quarto de Casal">
                    {' '}
                    Quarto de Casal{' '}
                  </Link>
                </li>
                <li>
                  <Link href="/categorias/Quarto de Solteiro">
                    {' '}
                    Quarto de Solteiro{' '}
                  </Link>
                </li>
                <li>
                  <Link href="/categorias/Cozinha"> Cozinha </Link>
                </li>
                <li>
                  <Link href="/categorias/Lavanderia"> Lavanderia </Link>
                </li>
                <li>
                  <Link href="/categorias/Escritorio"> Escritorio </Link>
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
      </div>
    </nav>
  );
}
