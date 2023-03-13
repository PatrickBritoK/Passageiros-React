
import { Form } from "react-router-dom";
import { postAeroporto } from "../services/aeroporto";

export function AeroportoNovo() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    postAeroporto({
        nome: data.nome.toString(),
        endereco: data.endereco.toString()
    })
  };
  return (
    <form >
      <div>
        <span>Nome</span>
        <input type="text" name="nome" />
      </div>

      <div>
        <span>Endereco</span>
        <input type="text" name="endereco" />
      </div>
      <input type="submit" value="Salvar" />
    </form>
  )
}
