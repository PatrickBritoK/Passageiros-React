import axios from "axios";

export async function getTodosAeroportos() {
  const aeroportos = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8007/aeroporto/todos');
  return aeroportos;
}


export async function getAeroporto(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8007/aeroporto/${id}`);
}