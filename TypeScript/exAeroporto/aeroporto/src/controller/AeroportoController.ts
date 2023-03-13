import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Aeroporto , Passageiro, Voo } from "../model/AeroportoModel";

export class AeroportoController {
  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Aeroporto);
    const aeroportos = await repo.find();
    res.json(aeroportos);
  }

  async create(req: Request, res: Response) {
    const {
      nome,
      endereco: endereco,
    }: {
      nome: string;
      endereco: string;
    } = req.body;
    const aeroporto = new Aeroporto();
    aeroporto.nome = nome;
    aeroporto.endereco = endereco;

    const repo = AppDataSource.getRepository(Aeroporto);
    await repo.save(aeroporto);

    res.json(aeroporto);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Aeroporto);
    const usuario = await repo.findOneBy({ codigo: parseInt(id, 10) });

    res.json(usuario);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nome, endereco } = req.body;

    const repo = AppDataSource.getRepository(Aeroporto);
    const aeroporto = await repo.findOneBy({ codigo: parseInt(id, 10) });
    aeroporto.nome = nome;
    aeroporto.endereco = endereco;

    await repo.save(aeroporto);
    res.json(aeroporto);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Aeroporto);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar Aeroporto" });
  }
}


export class PassageiroController {
  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Passageiro);
    const passageiros = await repo.find();
    res.json(passageiros);
  }

  async create(req: Request, res: Response) {
    const {
      nome,
    }: {
      nome: string;
    } = req.body;
    const passageiro = new Passageiro();
    passageiro.nome = nome;

    const repo = AppDataSource.getRepository(Passageiro);
    await repo.save(passageiro);

    res.json(passageiro);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Passageiro);
    const passageiro = await repo.findOneBy({ codigoPassageiro: parseInt(id, 10) });

    res.json(passageiro);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nome } = req.body;

    const repo = AppDataSource.getRepository(Passageiro);
    const passageiro = await repo.findOneBy({ codigoPassageiro: parseInt(id, 10) });
    passageiro.nome = nome;

    await repo.save(passageiro);
    res.json(passageiro);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Passageiro);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar Passageiro" });
  }
}


export class VooController {
  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Voo);
    const voo = await repo.find();
    res.json(voo);
  }

  async create(req: Request, res: Response) {
    const {
      destino,
      saida: saida,
    }: {
      destino: string;
      saida: string;
    } = req.body;
    const voo = new Voo();
    voo.destino = destino;
    voo.saida = saida;

    const repo = AppDataSource.getRepository(Voo);
    await repo.save(voo);

    res.json(voo);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Voo);
    const voo = await repo.findOneBy({ codigoVoo: parseInt(id, 10) });

    res.json(voo);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { destino, saida } = req.body;

    const repo = AppDataSource.getRepository(Voo);
    const voo = await repo.findOneBy({ codigoVoo: parseInt(id, 10) });
    voo.destino = destino;
    voo.saida = saida;

    await repo.save(voo);
    res.json(voo);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Voo);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar Voo" });
  }
}
