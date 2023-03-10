import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAeroporto } from "../services/aeroporto";

export function AeroportoVer() {
  const [ aeroportos, setUsuario ] = useState<any>();
  const params = useParams();
  console.log(params);

  if (!aeroportos) {
    getAeroporto(parseInt(params.id||'', 10))
      .then(res => setUsuario(res.data));
  }
  return (
    <div>
      <span>Usuário</span>
      <div>
        <span>Código</span>
        <input type="text" value={aeroportos?.codigo} />
      </div>
      <div>
        <span>Nome</span>
        <input type="text" value={aeroportos?.nome} />
      </div>
      <div>
        <span>Endereço</span>
        <input type="text" value={aeroportos?.endereco} />
      </div>
    </div>
  );
}
