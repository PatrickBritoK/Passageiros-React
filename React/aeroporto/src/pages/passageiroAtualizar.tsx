import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPassageiros , putPassageiro } from "../services/passageiro";

export function PassageiroAtualizar() {
  const [passageiro, setPassageiro] = useState<any>();

  const params = useParams();

  if (!passageiro) {
    getPassageiros(parseInt(params.id || "", 10)).then((res) =>
    setPassageiro(res.data)
    );
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    putPassageiro({
      codigopassageiro: passageiro.codigopassageiro,
      nomepassageiro: data.nomepassageiro.toString(),
    });
    alert('Atualizado')
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <span>Nome do Passageiro</span>
          <input type="text" name="nomepassageiro" defaultValue={passageiro?.nomepassageiro} />
        </div>
        <div>
          <input type="submit" value="Atualizar" />
        </div>
      </form>
    </div>
  );
}
