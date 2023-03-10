import axios from "axios"
import { useState } from "react";
import { getTodosAeroportos } from "../services/aeroporto"

export function Aeroporto() {
  const [ aeroportos, setAeroportos ] = useState<any[]>();

  if (!aeroportos || aeroportos.length == 0) {
    const aeroportoReq: any = getTodosAeroportos();
    aeroportoReq.then((res: any) => {
        setAeroportos(res.data);
    });
  }

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
          {
            aeroportos?.map(aeroporto => {
              return (
                <tr>
                  <td>{aeroporto.codigo}</td>
                  <td>{aeroporto.nome}</td>
                  <td>{aeroporto.endereco}</td>
                  <td><a href={`/aeroporto/${aeroporto.codigo}`}>Ver</a></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}