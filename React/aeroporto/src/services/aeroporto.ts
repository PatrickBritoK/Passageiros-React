import axios from "axios";
import { AeroportoModel } from "../model/aeroportoModel";

export async function getTodosAeroportos(): Promise<AeroportoModel[]> {
  const {data} = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8007/aeroporto/todos');
  return data;
}

export async function getAeroporto(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8007/aeroporto/${id}`);
}

export async function postAeroporto(dados: AeroportoModel) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
  .post('http://localhost:8007/aeroporto', dados)
}

export async function deleteAeroporto(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
  .delete(`http://localhost:8007/aeroporto/${id}`)
}