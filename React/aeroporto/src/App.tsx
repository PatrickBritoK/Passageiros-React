import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Aeroporto } from "./pages/aeroporto";
import { AeroportoVer } from "./pages/aeroportoVer";
import { AeroportoNovo } from "./pages/aeroportoNovo";
import { Passageiro } from "./pages/passageiros";
import { PassageiroNovo } from "./pages/passageiroNovo";
import { PassageiroVer } from "./pages/passageiroVer";
import { Voo } from "./pages/voos";
import { VoosVer } from "./pages/vooVer";
import { VooCriar } from "./pages/voosNovo";

import "../src/pages/style.css";
import { AeroportosAtualizar } from "./pages/aeroportoAtualizar";
import { PassageiroAtualizar } from "./pages/passageiroAtualizar";
import { VooAtualizar } from "./pages/vooAtualizar";

function App() {
  return (
    <div>
      <header className="header">
        <div className="App">
          <div className="paginas">
            <a className="homes" href="/home">
              Home
            </a>
            |
            <a className="homes" href="/aeroporto">
              Aeroportos
            </a>
            |
            <a className="homes" href="/passageiros">
              Passageiros
            </a>
            |
            <a className="homes" href="/Voos">
              Voos
            </a>
          </div>
          <div className="elementos">
            <Router>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/aeroporto" element={<Aeroporto />} />
                <Route path="/aeroporto/:id" element={<AeroportoVer />} />
                <Route path="/aeroporto-criar" element={<AeroportoNovo />} />
                <Route
                  path="/aeroportoAtualizar/:id"
                  element={<AeroportosAtualizar />}
                />
                <Route path="/passageiros" element={<Passageiro />} />
                <Route path="/passageiros/:id" element={<PassageiroVer />} />
                <Route path="/passageiro-criar" element={<PassageiroNovo />} />
                <Route
                  path="/PassageiroAtualizar/:id"
                  element={<PassageiroAtualizar />}
                />
                <Route path="/voos" element={<Voo />} />
                <Route path="/voo/:id" element={<VoosVer />} />
                <Route path="/voo-criar" element={<VooCriar />} />
                <Route path="/VooAtualizar/:id" element={<VooAtualizar/>} />
              </Routes>
            </Router>
          </div>
        </div>
      </header>
      <main></main>
    </div>
  );
}

export default App;
