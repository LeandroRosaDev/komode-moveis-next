import { useState, useEffect } from "react";

interface FiltroProps {
  params: { categorias: string };
  onFilterChange: (filters: Record<string, string>) => void;
}

const FiltroComponent = ({ params, onFilterChange }: FiltroProps) => {
  const [filters, setFilters] = useState<Record<string, string>>({});

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
      <label>
        <input
          type="checkbox"
          checked={filters.situacao === "promocao"}
          onChange={() => handleFilterChange("situacao", "promocao")}
        />
        Promoção
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.sub_categoria === "sofa retratil"}
          onChange={() => handleFilterChange("sub_categoria", "sofa retratil")}
        />
        Sofá Retrátil
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.sub_categoria === "painel"}
          onChange={() => handleFilterChange("sub_categoria", "painel")}
        />
        Painel
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.cor === "marrom"}
          onChange={() => handleFilterChange("cor", "marrom")}
        />
        Marrom
      </label>
      <button onClick={handleClearFilters}>Limpar Filtros</button>
    </div>
  );
};

export default FiltroComponent;
