import "./App.css";
import Header from "./components/core/Header";
import SymbolLibrary from "./components/content/SymbolLibrary";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="workspace">
        <SymbolLibrary />
        <div className="workspace"></div>
      </div>
    </div>
  );
}

export default App;
