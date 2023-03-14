import { useState } from "react";
import { useParams } from "react-router-dom";
import { getVoo , putVoo } from "../services/voo";

export function VooAtualizar() {
  const [voos, setVoo] = useState<any>();

  const params = useParams();

  if (!voos) {
    getVoo(parseInt(params.id || "", 10)).then((res) =>
    setVoo(res.data)
    );
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    putVoo({
        codigoVoo: voos.codigoVoo,
        destino: data.destino.toString(),
        saida: data.saida.toString()
    });
    alert('Atualizado')
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <span>destino</span>
          <input type="text" name="destino" defaultValue={voos?.destino} />
        </div>
        <div>
        <span>saida</span>
          <input type="text" name="saida" defaultValue={voos?.saida} />
        </div>
        <div>
          <input type="submit" value="Atualizar" />
        </div>
      </form>
    </div>
  );
}
