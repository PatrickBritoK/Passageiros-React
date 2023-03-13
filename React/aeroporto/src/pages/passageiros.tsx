
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPassageiros } from "../services/passageiro";

export function PassageiroVer() {
  const [ passageiros, setPassageiros ] = useState<any>();
  const params = useParams();
  console.log(params);

  if (!passageiros) {
    getPassageiros(parseInt(params.id||'', 10))
      .then(res => setPassageiros(res.data));
  }

  return (
    <div>
      <span>Passageiros</span>
      <div>
        <span>Código</span>
        <input type="text" value={passageiros?.codigoPassageiro} />
      </div>
      <div>
        <span>Nome</span>
        <input type="text" value={passageiros?.nome} />
      </div>
    </div>
  );
}
