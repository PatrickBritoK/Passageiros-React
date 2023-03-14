import axios from "axios";
import { useEffect, useState } from "react";
import { VooModel } from "../model/vooModel";
import { getTodosVoo, deleteVoo } from "../services/voo";

import "../pages/style.css";

export function Voo() {
  const [voos, setVoos] = useState<any[]>();

  const loadData = async () => {
    const voos: VooModel[] = await getTodosVoo();
    setVoos(voos);
  };

  useEffect(() => {
    loadData();
  }, []);
  const onClickDeleteVoo = (id: number) => {
    deleteVoo(id).then(() => loadData());
  };

  return (
    
    <div className="paginas">
      <span>Passageiros</span>

      <table>
        <thead>
          <tr>
            <td>Código</td>
            <td>Destino</td>
            <td>Saida</td>
          </tr>
        </thead>
        <tbody>
          {voos?.map((voo) => {
            return (
              <tr>
                <td>{voo.codigoVoo}</td>
                <td>{voo.destino}</td>
                <td>{voo.saida}</td>
                <td>
                  <a className="ver" href={`/voo/${voo.codigoVoo}`}>
                    Ver
                  </a>
                  <button
                    className="deletar"
                    onClick={() => onClickDeleteVoo(voo.codigoVoo)}
                  >
                    Delete
                  </button>
                  <a className="atualizar" href={`/VooAtualizar/${voo.codigoVoo}`}>
                    Atualizar
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <a className="criar" href="/voo-criar">
        Criar Voo
      </a>
    </div>
  );
}
