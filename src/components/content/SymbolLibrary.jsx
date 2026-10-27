import "./SymbolLibrary.css";

export default function SymbolLibrary() {
  const { data, loading, error } = {
    data: { categories: "hello" },
    loading: false,
    error: "error",
  };

  return (
    <aside className="library">
      <h2 className="library-title">Symbols</h2>

      {loading && <p className="status">Loading Symbols</p>}
      {error && <p className="status">Failed to load: {error.message}</p>}
      {data && <p className="status">{data.categories}</p>}
    </aside>
  );
}
