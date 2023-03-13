import axios from "axios";
import { PassageirosModel } from "../model/passageiroModel";

export async function getTodosPassageiros(): Promise<PassageirosModel[]> {
  const {data} = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8007/passageiros/todos');
  return data;
}

export async function getPassageiros(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8007/passageiros/${id}`);
}

export async function postPassageiros(dados: PassageirosModel) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
  .post('http://localhost:8007/passageiros', dados)
}

export async function deletePassageiros(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
  .delete(`http://localhost:8007/passageiros/${id}`)
}