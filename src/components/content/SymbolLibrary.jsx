import { useSymbols } from "../../hooks/assetService";
import "./SymbolLibrary.css";

export default function SymbolLibrary() {
  const { data, loading, error } = useSymbols();

  return (
    <aside className="library">
      <h2 className="library-title">Symbols</h2>

      {loading && <p className="status">Loading Symbols</p>}
      {error && <p className="status">Failed to load: {error.message}</p>}
      {data?.categories?.map((category) => (
        <section key={category.name}>
          <h3>{category.name}</h3>
          <ul>
            {category.symbols.map((symbol) => (
              <li key={symbol.name}>{symbol.name}</li>
            ))}
          </ul>
        </section>
      ))}
    </aside>
  );
}
