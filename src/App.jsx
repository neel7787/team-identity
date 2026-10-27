import "./App.css";
import Header from "./components/core/Header";
import SymbolLibrary from "./components/content/SymbolLibrary";
import Stage from "./components/content/Stage";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="workspace">
        <SymbolLibrary />
        <Stage />
      </div>
    </div>
  );
}

export default App;
