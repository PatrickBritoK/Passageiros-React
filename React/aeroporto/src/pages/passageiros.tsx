import axios from "axios";
import { useEffect, useState } from "react";
import { PassageirosModel } from "../model/passageiroModel";
import { getTodosPassageiros, deletePassageiros } from "../services/passageiro";

import "../pages/style.css";

export function Passageiro() {
  const [passageiros, setPassageiros] = useState<any[]>();

  const loadData = async () => {
    const passageiros: PassageirosModel[] = await getTodosPassageiros();
    setPassageiros(passageiros);
  };

  useEffect(() => {
    loadData();
  }, []);
  const onClickDeletePassageiro = (id: number) => {
    deletePassageiros(id).then(() => loadData());
  };

  return (
    
    <div className="paginas">
      <span>Passageiros</span>

      <table>
        <thead>
          <tr>
            <td>Código</td>
            <td>Nome</td>
          </tr>
        </thead>
        <tbody>
          {passageiros?.map((passageiro) => {
            return (
              <tr>
                <td>{passageiro.codigopassageiro}</td>
                <td>{passageiro.nomepassageiro}</td>
                <td>
                  <a className="ver" href={`/passageiros/${passageiro.codigopassageiro}`}>
                    Ver
                  </a>
                  <button
                    className="deletar"
                    onClick={() => onClickDeletePassageiro(passageiro.codigopassageiro)}
                  >
                    Delete
                    
                  </button>
                  <a className="atualizar" href={`/PassageiroAtualizar/${passageiro.codigopassageiro}`}>
                    Atualizar
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <a className="criar" href="/passageiro-criar">
        Criar Passageiro
      </a>
    </div>
  );
}
