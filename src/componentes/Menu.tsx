import Link from "next/link";

export default async function Menu() {
  return (
    <>
      <ul className="menu flex">
        <li>
          <Link href="/">Início</Link>
        </li>
        <li>
          <Link href="/produto">Produto</Link>
        </li>
        <li>
          <Link href="/sobre"> Sobre Nós </Link>
        </li>
        <li>
          <Link href="/contato"> Contato</Link>
        </li>
      </ul>
    </>
  );
}
