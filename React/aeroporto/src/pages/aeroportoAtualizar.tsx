import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAeroporto, putAeroporto } from "../services/aeroporto";

export function AeroportosAtualizar() {
  const [aeroporto, setaeroporto] = useState<any>();

  const params = useParams();

  if (!aeroporto) {
    getAeroporto(parseInt(params.id || "", 10)).then((res) =>
      setaeroporto(res.data)
    );
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    putAeroporto({
      codigo: aeroporto.codigo,
      nome: data.nome.toString(),
      endereco: data.endereco.toString(),
    });
    alert("Atualizado")
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <span>Nome</span>
          <input type="text" name="nome" defaultValue={aeroporto?.nome} />
        </div>

        <div>
          <span>Endereço</span>
          <input
            type="text"
            name="endereco"
            defaultValue={aeroporto?.endereco}
          />
        </div>
        <div>
          <input type="submit" value="Atualizar" />
        </div>
      </form>
    </div>
  );
}
