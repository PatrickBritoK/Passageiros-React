import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Aeroporto } from "./pages/aeroporto";
import { AeroportoVer } from "./pages/aeroportoVer";
import "../src/pages/style.css";

function App() {
  return (
    <header className="header">
      <div className="App">
        <div className="paginas">
          <a href="/home">Home</a>///
          <a href="/aeroporto">Usuarios</a>
        </div>
        <div className="elementos">
          <Router>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/aeroporto" element={<Aeroporto />} />
              <Route path="/aeroporto/:id" element={<AeroportoVer />} />
            </Routes>
          </Router>
        </div>
      </div>
    </header>
  );
}

export default App;
