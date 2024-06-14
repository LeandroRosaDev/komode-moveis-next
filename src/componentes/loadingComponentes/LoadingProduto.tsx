// LoadingComponent.tsx
import style from "./loadingProduto.module.css";
import Image from "next/image";

export default function LoadingComponent() {
  return (
    <section className={style.produtoPage}>
      <div className={style.content}>
        <div className={style.produtoContainer}>
          <div className={style.produtoImages}>
            <div className={style.imageContainer}>
              <button className={style.navButton}>&lt;</button>
              <div className={style.loadingImage}></div>
              <button className={style.navButton}>&gt;</button>
            </div>
            <div className={style.thumbnailContainer}>
              {[1, 2, 3].map((_, index) => (
                <div key={index} className={style.thumbnail}></div>
              ))}
            </div>
          </div>
          <div className={style.produtoInfo}>
            <h1 className={style.loadingText}></h1>
            <div className={style.preco}>
              <span className={style.loadingText}></span>
              <span className={style.loadingText}></span>
              <span className={style.loadingText}></span>
            </div>
            <div className={style.cores}>
              <h3>Cor:</h3>
              <span className={style.loadingColor}></span>
            </div>
            <div className={style.whatsappButton}></div>
            <p className={style.loadingText}></p>
          </div>
        </div>
        <div className={style.descricaoContainer}>
          <ul className={style.descricaoMenu}>
            <li className={style.loadingText}></li>
            <li className={style.loadingText}></li>
          </ul>
          <div className={style.descricao}>
            <h3 className={style.loadingText}></h3>
            <p className={style.loadingText}></p>
            <h3 className={style.loadingText}></h3>
            <p className={style.loadingText}></p>
            <p className={style.loadingText}></p>
            <p className={style.loadingText}></p>
            <p className={style.loadingText}></p>
            <h3 className={style.loadingText}></h3>
            <p className={style.loadingText}></p>
            <h3 className={style.loadingText}></h3>
            <p className={style.loadingText}></p>
            <h3 className={style.loadingText}></h3>
            <p className={style.loadingText}></p>
          </div>
        </div>
      </div>
    </section>
  );
}
