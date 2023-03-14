
import { postPassageiros } from "../services/passageiro";

export function PassageiroNovo() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    postPassageiros({
      nomepassageiro: data.nomepassageiro.toString()
    })
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>Nome</span>
        <input type="text" name="nomepassageiro" />
      </div>
      <input className="salvar" type="submit" value="Salvar" />
    </form>
  )
}
