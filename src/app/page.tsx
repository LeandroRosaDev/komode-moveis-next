import GetProdutosDestaque from "@/componentes/produtosComponentes/Get-Produtos-Destaque";
import style from "./page.module.css";
import Image from "next/image";
import iconCategoria1 from "@/../public/assets/categoria-icon-1.png";
import iconCategoria2 from "@/../public/assets/categoria-icon-2.png";
import iconCategoria3 from "@/../public/assets/categoria-icon-3.png";
import iconCategoria4 from "@/../public/assets/categoria-icon-4.png";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <h1>
        Olá Mariazinha, bem vinda ao Inicio do seu Sonho papai ta lutando muito!
      </h1> */}
      <div className={style.bg}></div>
      <section className={style.gridProdutosContainer}>
        <h1>Produtos Populares</h1>
        <h3>Venha conferir nossos produtos em destaque</h3>
        <GetProdutosDestaque />
      </section>
      <section className={style.categoriasSectionContainer}>
        <h1>Categorias Populares</h1>
        <h3>
          Confira aqui abaixo as principais categorias para encontrar tudo que
          precisa para o seu lar
        </h3>
        <div className={style.categoriasContainer}>
          <Link href="" className={style.Link} id={style.categoria1}>
            <Image src={iconCategoria1} alt="Icone específico da categoria" />
            <p>Sala de Estar</p>
            <h1>Os melhores móveis para a sua casa</h1>
            <p>
              Venha conferir os melhores móveis de escritório para a sua casa
            </p>
          </Link>
          <Link href="" className={style.Link} id={style.categoria2}>
            <Image src={iconCategoria2} alt="Icone específico da categoria" />
            <p>Quarto</p>
            <h1>Os melhores móveis para a sua casa</h1>
            <p>
              Venha conferir os melhores móveis de escritório para a sua casa
            </p>
          </Link>
          <Link href="" className={style.Link} id={style.categoria3}>
            <Image src={iconCategoria3} alt="Icone específico da categoria" />
            <p>Escritório</p>
            <h1>Os melhores móveis para a sua casa</h1>
            <p>
              Venha conferir os melhores móveis de escritório para a sua casa
            </p>
          </Link>
          <Link href="" className={style.Link} id={style.categoria4}>
            <Image src={iconCategoria4} alt="Icone específico da categoria" />
            <p>Banheiro</p>
            <h1>Os melhores móveis para a sua casa</h1>
            <p>
              Venha conferir os melhores móveis de escritório para a sua casa
            </p>
          </Link>
        </div>
      </section>
      <section className={style.sobreContainer}>
        <div>
          <h1>Nossa História</h1>
          <p>
            Nossa história se inicia em 2019, quando decidimos abrir nossa
            primeira loja. Localizada em São João de Meriti nossa loja hoje em
            outro endereço nos trouxe a sabedoria e a experiençia de como lidar
            com o público e sempre atender com muito carinho nossos clientes.
          </p>
        </div>
      </section>
      <section className={style.duvidasContainer}>
        <h1>Duvidas</h1>
        <h3>Tirem suas principais duvidas conosco</h3>
        <div>
          <Link href="">
            <Image src="" alt="" />
            <h1>Como são feitas as entregas no site</h1>
          </Link>
          <Link href="">
            <Image src="" alt="" />
            <h1>Como são feitas as entregas no site</h1>
          </Link>
          <Link href="">
            <Image src="" alt="" />
            <h1>Como são feitas as entregas no site</h1>
          </Link>
        </div>
      </section>
      <section className={style.socialContainer}>
        <h1>Sigam nos no instagram</h1>
        <h3>@komodemoveis</h3>
        <div>
          <Image src="" alt="" />
          <Image src="" alt="" />
          <Image src="" alt="" />
          <Image src="" alt="" />
          <Image src="" alt="" />
          <Image src="" alt="" />
          <Image src="" alt="" />
        </div>
      </section>
    </main>
  );
}
