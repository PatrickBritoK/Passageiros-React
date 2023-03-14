import { useState } from "react";
import { useParams } from "react-router-dom";
import { getVoo } from "../services/voo";


export function VoosVer() {
  const [ voos, setVoos ] = useState<any>();
  const params = useParams();
  console.log(params);

  if (!voos) {
    getVoo(parseInt(params.id||'', 10))
      .then(res => setVoos(res.data));
  }

  return (
    <div>
      <span>Voos</span>
      <div>
        <span>Código</span>
        <input type="text" value={voos?.codigoVoo} />
      </div>
      <div>
        <span>Destino</span>
        <input type="text" value={voos?.destino} />
      </div>
      <div>
        <span>Saida</span>
        <input type="text" value={voos?.saida} />
      </div>
    </div>
  );
}
