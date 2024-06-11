import GetProdutosDestaque from "@/componentes/produtosComponentes/Get-Produtos-Destaque";
import style from "./page.module.css";
import Image from "next/image";
import iconCategoria1 from "../../public/assets/categoria-icon-1.png";
import iconCategoria2 from "../../public/assets/categoria-icon-2.png";
import iconCategoria3 from "../../public/assets/categoria-icon-3.png";
import iconCategoria4 from "../../public/assets/categoria-icon-4.png";
import iconTarja1 from "../../public/assets/8.svg";
import iconTarja2 from "../../public/assets/9.svg";
import iconTarja3 from "../../public/assets/10.svg";
import duvida1 from "../../public/assets/duvidas-img-1.png";
import duvida2 from "../../public/assets/duvidas-img-2.png";
import duvida3 from "../../public/assets/duvidas-img-3.png";
import social from "../../public/assets/social-img.png";
import Link from "next/link";
// import Slide from "@/componentes/slideHome/Slide";

export default function Home() {
  return (
    <main style={{ width: "100%" }}>
      {/* <h1>
        Olá Mariazinha, bem vinda ao Inicio do seu Sonho papai ta lutando muito!
      </h1> */}

      <div className={style.bg}></div>
      <div className={style.tarjaVermelha}>
        <h1>Todos os produtos com frete grátis para todo o Rio de Janeiro </h1>
        <Image src={iconTarja1} alt="Iconde de um caminhao" width={50} />
        <h1>pagamento em até 12x sem juros no cartão e</h1>
        <Image src={iconTarja2} alt="Iconde de um caminhao" width={50} />

        <h1> e você só vai pagar no hora da entrega</h1>

        <Image src={iconTarja3} alt="Iconde de um caminhao" width={50} />
      </div>
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
          <Link
            href="/categorias/sala de estar"
            className={style.Link}
            id={style.categoria1}
          >
            <Image src={iconCategoria1} alt="Icone de uma sofá" />
            <p>Sala de Estar</p>
            <div>
              <h1>Os melhores móveis para a sua sala de estar</h1>
              <p>
                Venha conferir os melhores móveis para decorar a sua sala de
                estar!
              </p>
            </div>
          </Link>
          <Link
            href="/categorias/quarto de solteiro"
            className={style.Link}
            id={style.categoria2}
          >
            <Image src={iconCategoria2} alt="Icone de uma cama" />
            <p>Quarto</p>
            <div>
              <h1>Os melhores móveis para o seu quarto</h1>
              <p>Venha mobiliar seu quarto com os melhores móveis!</p>
            </div>
          </Link>
          <Link
            href="/categorias/escritorio"
            className={style.Link}
            id={style.categoria3}
          >
            <Image src={iconCategoria3} alt="Icone de um escrivaninha" />
            <p>Escritório</p>
            <div>
              <h1>Os melhores móveis para o seu escritório</h1>
              <p>
                Venha conferir os melhores móveis de escritório para a sua casa!
              </p>
            </div>
          </Link>
          <Link
            href="/categorias/banheiro"
            className={style.Link}
            id={style.categoria4}
          >
            <Image src={iconCategoria4} alt="Icone de um banheiro" />
            <p>Banheiro</p>
            <div>
              <h1>Os melhores móveis para o seu banheiro</h1>
              <p>Que tal um banheiro dos sonhos? Aqui você pode!</p>
            </div>
          </Link>
        </div>
      </section>
      <section className={style.sobreContainer}>
        <div className={style.sobreContent}>
          <h1 className="mainTitle" style={{ color: "white" }}>
            Nossa História
          </h1>
          <p
            className="secondTitle"
            style={{ color: "white", maxWidth: "700px" }}
          >
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
          <Link href="/duvidas" className={style.LinksDuvidas}>
            <Image src={duvida1} alt="Imagem de entregas" width={400} />
            <h1>Qual o tempo de entrega?</h1>
            <button className={style.verMais}>Veja Mais</button>
          </Link>
          <Link href="/duvidas" className={style.LinksDuvidas}>
            <Image src={duvida2} alt="Imagem de um contrato" width={400} />
            <h1>Qual o prazo de garantia?</h1>
            <button className={style.verMais}>Veja Mais</button>
          </Link>
          <Link href="/duvidas" className={style.LinksDuvidas}>
            <Image src={duvida3} alt="Imagem de um cartão" width={400} />
            <h1>O pagamento é na entrega?</h1>
            <button className={style.verMais}>Veja Mais</button>
          </Link>
        </div>
      </section>
      <section className={style.socialContainer}>
        <h1 className="mainTitle">Sigam-nos no instagram</h1>
        <h3 className="secondTitle">
          <a target="blank" href="https://www.instagram.com/komodemd/">
            @komodemd
          </a>
        </h3>
        <div className={style.socialImages}>
          <Image src={social} alt="Imagens de cômodos" />
        </div>
      </section>
    </main>
  );
}
