
import { postVoo } from "../services/voo";

export function VooCriar() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    postVoo({
        destino: data.destino.toString(),
        saida: data.saida.toString()
    })
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>destino</span>
        <input type="text" name="destino" />
      </div>
      <div>
        <span>saida</span>
        <input type="text" name="saida" />
      </div>
      <input className="salvar" type="submit" value="Salvar" />
    </form>
  )
}
