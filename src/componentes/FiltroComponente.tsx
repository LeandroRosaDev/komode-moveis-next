// componentes/produtosComponentes/filtro/FiltroComponent.tsx
import { useState, useEffect } from "react";

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
    valor: ["500", "1000", "1500", "2000", "2500", "3000", "4000", "5000"],
  };

  const categoryFilters: Record<string, string[]> = {
    "Sala de Estar": [
      "sofa retratil",
      "sofa de canto",
      "sofa de 2 e 3 lugares",
      "estante",
      "painel",
      "armario",
      "mesa de jantar",
    ],
    cozinha: ["kit de cozinha", "balcao de cozinha", "mesa de alumínio"],
    banheiro: ["armario de banheiro"],
    "Quarto de Casal": [
      "cama de casal",
      "guarda roupa de casal",
      "base de casal",
      "colchao de casal",
    ],
    "Quarto de Solteiro": [
      "cama de solteiro",
      "guarda roupa de solteiro",
      "base de solteiro",
      "colchao de solteiro",
    ],
    Lavanderia: ["multiuso"],
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
    <div>
      <h3>Filtros:</h3>
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
      {globalFilters.disponibilidade.map((disponibilidade) => (
        <label key={disponibilidade}>
          <input
            type="checkbox"
            checked={filters.disponibilidade === disponibilidade}
            onChange={() =>
              handleFilterChange("disponibilidade", disponibilidade)
            }
          />
          Disponibilidade: {disponibilidade}
        </label>
      ))}
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
      {availableFilters.map((subCategoria) => (
        <label key={subCategoria}>
          <input
            type="checkbox"
            checked={filters.sub_categoria === subCategoria}
            onChange={() => handleFilterChange("sub_categoria", subCategoria)}
          />
          {subCategoria}
        </label>
      ))}
      <button onClick={handleClearFilters}>Limpar Filtros</button>
    </div>
  );
};

export default FiltroComponent;
