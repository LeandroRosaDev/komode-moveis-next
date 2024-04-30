import GetProdutosDestaque from "@/componentes/produtosComponentes/Get-Produtos-Destaque";
import style from "./page.module.css";
import Image from "next/image";
import iconCategoria1 from "../../public/assets/categoria-icon-1.png";
import iconCategoria2 from "../../public/assets/categoria-icon-2.png";
import iconCategoria3 from "../../public/assets/categoria-icon-3.png";
import iconCategoria4 from "../../public/assets/categoria-icon-4.png";
import duvida1 from "../../public/assets/duvidas-img-1.png";
import duvida2 from "../../public/assets/duvidas-img-2.png";
import duvida3 from "../../public/assets/duvidas-img-3.png";
import social from "../../public/assets/social-img.png";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <h1>
        Olá Mariazinha, bem vinda ao Inicio do seu Sonho papai ta lutando muito!
      </h1> */}
      <div className={style.bg}></div>
      <section className={style.gridProdutosContainer}>
        <h1 className="mainTitle">Produtos Populares</h1>
        <h3 className="secondTitle">
          Venha conferir nossos produtos em destaque
        </h3>
        <GetProdutosDestaque />
      </section>
      <section className={style.categoriasSectionContainer}>
        <h1 className="mainTitle">Categorias Populares</h1>
        <h3 className="secondTitle">
          Confira aqui abaixo as principais categorias para encontrar tudo que
          precisa para o seu lar
        </h3>
        <div className={style.categoriasContainer}>
          <Link href="" className={style.Link} id={style.categoria1}>
            <Image src={iconCategoria1} alt="Icone de uma sofá" />
            <p>Sala de Estar</p>
            <div>
              <h1>Os melhores móveis para a sua casa</h1>
              <p>
                Venha conferir os melhores móveis de escritório para a sua casa
              </p>
            </div>
          </Link>
          <Link href="" className={style.Link} id={style.categoria2}>
            <Image src={iconCategoria2} alt="Icone de uma cama" />
            <p>Quarto</p>
            <div>
              <h1>Os melhores móveis para a sua casa</h1>
              <p>
                Venha conferir os melhores móveis de escritório para a sua casa
              </p>
            </div>
          </Link>
          <Link href="" className={style.Link} id={style.categoria3}>
            <Image src={iconCategoria3} alt="Icone de um escrivaninha" />
            <p>Escritório</p>
            <div>
              <h1>Os melhores móveis para a sua casa</h1>
              <p>
                Venha conferir os melhores móveis de escritório para a sua casa
              </p>
            </div>
          </Link>
          <Link href="" className={style.Link} id={style.categoria4}>
            <Image src={iconCategoria4} alt="Icone de um banheiro" />
            <p>Banheiro</p>
            <div>
              <h1>Os melhores móveis para a sua casa</h1>
              <p>
                Venha conferir os melhores móveis de escritório para a sua casa
              </p>
            </div>
          </Link>
        </div>
      </section>
      <section className={style.sobreContainer}>
        <div className={style.sobreContent}>
          <h1 className="mainTitle" style={{ color: "white" }}>
            Nossa História
          </h1>
          <p className="secondTitle" style={{ color: "white" }}>
            Nossa história se inicia em 2019, quando decidimos abrir nossa
            primeira loja. Localizada em São João de Meriti nossa loja hoje em
            outro endereço nos trouxe a sabedoria e a experiençia de como lidar
            com o público e sempre atender com muito carinho nossos clientes.
          </p>

          <Link href="/sobre" className="buttonTransparent">
            Veja a nossa história completa
          </Link>
        </div>
      </section>
      <section className={style.duvidasContainer}>
        <h1 className="mainTitle">Duvidas</h1>
        <h3 className="secondTitle">Tirem suas principais duvidas conosco</h3>
        <div className={style.duvidasContent}>
          <Link href="" className={style.LinksDuvidas}>
            <Image src={duvida1} alt="Imagem de entregas" width={400} />

            <h1>Qual o tempo de entrega?</h1>
          </Link>
          <Link href="" className={style.LinksDuvidas}>
            <Image src={duvida2} alt="Imagem de um contrato" width={400} />
            <h1>Qual o prazo de garantia?</h1>
          </Link>
          <Link href="" className={style.LinksDuvidas}>
            <Image src={duvida3} alt="Imagem de um cartão" width={400} />
            <h1>O pagamento é na entrega?</h1>
          </Link>
        </div>
      </section>
      <section className={style.socialContainer}>
        <h1 className="mainTitle">Sigam nos no instagram</h1>
        <h3 className="secondTitle">@komodemoveis</h3>
        <div className={style.socialImages}>
          <Image src={social} alt="Imagens de cômodos" />
        </div>
      </section>
    </main>
  );
}
