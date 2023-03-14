import axios from "axios";
import { VooModel } from "../model/vooModel";

export async function getTodosVoo(): Promise<VooModel[]> {
  const {data} = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8007/voo/todos');
  return data;
}

export async function getVoo(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8007/voo/${id}`);
}

export async function postVoo(dados: VooModel) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
  .post('http://localhost:8007/voo', dados)
}

export async function deleteVoo(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
  .delete(`http://localhost:8007/voo/${id}`)
}

export async function putVoo(dados: VooModel) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .put(`http://localhost:8007/voo/${dados.codigoVoo}`, dados);
}