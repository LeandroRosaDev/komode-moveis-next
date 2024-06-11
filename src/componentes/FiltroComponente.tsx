// componentes/produtosComponentes/filtro/FiltroComponent.tsx
import { useState, useEffect } from "react";
import style from "./filtro.module.css";

interface FiltroProps {
  params: { categorias: string };
  onFilterChange: (filters: Record<string, string>) => void;
}

const FiltroComponent = ({ params, onFilterChange }: FiltroProps) => {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [availableFilters, setAvailableFilters] = useState<string[]>([]);

  const globalFilters = {
    situacao: ["destaque", "promocao", "queima de estoque"],
    cor: ["marrom", "preto"],

    disponibilidade: ["sim", "não"],
    valor: ["500", "999", "1500", "2000", "2500", "3000", "4000", "5000"],
  };

  const categoryFilters: Record<string, string[]> = {
    "Sala de Estar": [
      "Sofá Retrátil",
      "Sofá de Canto",
      "Sofá de 2 e 3 lugares",
      "Estante",
      "Painel",
      "Armario",
      "Mesa de Jantar",
    ],
    Cozinha: ["Kit de Cozinha", "balcao de cozinha", "mesa de alumínio"],
    Banheiro: ["Armário de banheiro"],
    "Quarto de Casal": [
      "Cama de Casal",
      "Guarda Roupa Casal",
      "Base de Casal",
      "Colchão de Casal",
    ],
    "Quarto de Solteiro": [
      "Cama de Solteiro",
      "Guarda Roupa Solteiro",
      "Base de Solteiro",
      "Colchao de Solteiro",
    ],
    Lavanderia: ["Multiuso"],
  };

  useEffect(() => {
    // Atualiza os filtros disponíveis com base na categoria
    const categoryKey = decodeURIComponent(params.categorias).replace(
      /%20/g,
      " "
    );
    if (categoryKey in categoryFilters) {
      setAvailableFilters(categoryFilters[categoryKey]);
    } else {
      setAvailableFilters([]);
    }
  }, [params.categorias]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[key] === value) {
        delete newFilters[key];
      } else {
        newFilters[key] = value;
      }
      return newFilters;
    });
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  return (
    <section className={style.container}>
      <h3>Filtros:</h3>
      <div className={style.content}>
        <div>
          <h2>Produtos:</h2>
          {availableFilters.map((subCategoria) => (
            <label key={subCategoria}>
              <input
                type="checkbox"
                checked={filters.sub_categoria === subCategoria}
                onChange={() =>
                  handleFilterChange("sub_categoria", subCategoria)
                }
              />
              {subCategoria}
            </label>
          ))}
        </div>
        <div>
          <h2>Promoção:</h2>
          {globalFilters.situacao.map((situacao) => (
            <label key={situacao}>
              <input
                type="checkbox"
                checked={filters.situacao === situacao}
                onChange={() => handleFilterChange("situacao", situacao)}
              />
              {situacao.charAt(0).toUpperCase() + situacao.slice(1)}
            </label>
          ))}
        </div>
        <div>
          <h2>Cor:</h2>
          {globalFilters.cor.map((cor) => (
            <label key={cor}>
              <input
                type="checkbox"
                checked={filters.cor === cor}
                onChange={() => handleFilterChange("cor", cor)}
              />
              {cor.charAt(0).toUpperCase() + cor.slice(1)}
            </label>
          ))}
        </div>

        <div>
          <h2>Disponibilidade:</h2>

          {globalFilters.disponibilidade.map((disponibilidade) => (
            <label key={disponibilidade}>
              <input
                type="checkbox"
                checked={filters.disponibilidade === disponibilidade}
                onChange={() =>
                  handleFilterChange("disponibilidade", disponibilidade)
                }
              />
              Em estoque: {disponibilidade}
            </label>
          ))}
        </div>

        <h2>Range de Valor:</h2>
        <div id={style.mobile}>
          {globalFilters.valor.map((valor) => (
            <label key={valor}>
              <input
                type="checkbox"
                checked={filters.valor === valor}
                onChange={() => handleFilterChange("valor", valor)}
              />
              Até R${valor}
            </label>
          ))}
        </div>
      </div>
      <button onClick={handleClearFilters}>Limpar Filtros</button>
    </section>
  );
};

export default FiltroComponent;
