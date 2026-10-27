import "./App.css";
import Header from "./components/core/Header";
import SymbolLibrary from "./components/content/SymbolLibrary";

function App() {
  return (
    <div className="app">
      <Header />
      <SymbolLibrary />
      <div className="workspace"></div>
    </div>
  );
}

export default App;
