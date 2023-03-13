import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Aeroporto } from "./pages/aeroporto";
import { AeroportoVer } from "./pages/aeroportoVer";
import { AeroportoNovo } from "./pages/aeroportoNovo";
import { PassageiroVer } from "./pages/passageiros";


import "../src/pages/style.css";

function App() {
  return (
    <body>
      
    
    <header className="header">
      <div className="App">
        <div className="paginas">
          <a className="homes" href="/home">Home</a>
          <a className="homes" href="/aeroporto">Aeroportos</a>
          <a className="homes" href="/passageiros">Passageiros</a>
        </div>
        <div className="elementos">
          <Router>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/aeroporto" element={<Aeroporto />} />
              <Route path="/aeroporto/:id" element={<AeroportoVer />} />
              <Route path="/aeroporto-criar" element={<AeroportoNovo/>} />
              <Route path="/passageiros" element={<PassageiroVer/>} />
            </Routes>
          </Router>
        </div>
      </div>
    </header>
    <main>
    </main>
    </body>
  );
}

export default App;
