import axios from "axios";
import { useEffect, useState } from "react";
import { AeroportoModel } from "../model/aeroportoModel";
import { getTodosAeroportos } from "../services/aeroporto";
import { deleteAeroporto } from "../services/aeroporto";

export function Aeroporto() {
  const [aeroportos, setAeroportos] = useState<any[]>();

  const loadData = async () => {
    const aeroportos: AeroportoModel[] = await getTodosAeroportos();
    setAeroportos(aeroportos);
  };

  useEffect(() => {
    loadData();
  }, []);
  const onClickDeleteAeroporto = (id: number) => {
    deleteAeroporto(id).then(() => loadData());
  };

  return (
    <div className="paginas">
      <span>Aeroportos</span>

      <table>
        <thead>
          <td>Código</td>
          <td>Nome</td>
          <td>endereco</td>
          <td>Ações</td>
        </thead>
        <tbody>
          {aeroportos?.map((aeroporto) => {
            return (
              <tr>
                <td>{aeroporto.codigo}</td>
                <td>{aeroporto.nome}</td>
                <td>{aeroporto.endereco}</td>
                <td>
                  <a className="ver" href={`/aeroporto/${aeroporto.codigo}`}>Ver</a>
                  <button className="deletar" onClick={() => onClickDeleteAeroporto(aeroporto.codigo)} >Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <a className="criar" href="/aeroporto-criar">Criar Aeroporto</a>
    </div>
  );
}
