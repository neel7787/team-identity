import { useState } from "react";
import Header from "./components/core/Header";
import SymbolLibrary from "./components/content/SymbolLibrary";
import Stage from "./components/content/Stage";
import "./App.css";

function App() {
  const [placed, setPlaced] = useState([]);
  const [selectedId, setSelectedId] = useState([]);

  function handleDropSymbol(item) {
    setPlaced((prev) => [...prev, item]);
    setSelectedId(item.id);
  }

  function handleUpdate(id, patch) {
    setPlaced((prev) => {
      return prev.map((item) => {
        item.id === id ? { ...item, ...patch } : item;
      });
    });
  }

  return (
    <div className="app">
      <Header />
      <div className="workspace">
        <SymbolLibrary />
        <Stage
          item={placed}
          selectedId={selectedId}
          onDropSymbol={handleDropSymbol}
          onSelect={setSelectedId}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
}

export default App;
