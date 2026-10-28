import { useSymbols } from "../../hooks/assetService";
import "./SymbolLibrary.css";
import SymbolReader from "./SymbolReader";

export default function SymbolLibrary() {
  const { data, loading, error } = useSymbols();

  return (
    <aside className="library">
      <h2 className="library-title">Symbols</h2>

      {loading && <p className="status">Loading Symbols</p>}
      {error && <p className="status">Failed to load: {error.message}</p>}
      {data?.categories?.map((category) => (
        <section key={category.name} className="category">
          <h2>{category.name}</h2>
          <div className="grid">
            {category.symbols.map((symbol) => (
              <figure key={symbol.name} className="card" draggable>
                <SymbolReader symbol={symbol} />
                <figcaption>{symbol.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </aside>
  );
}
