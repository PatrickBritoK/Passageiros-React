import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Passageiros } from "../model/PassageiroModel";

export class PassageiroController {
  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Passageiros);
    const passageiros = await repo.find();
    res.json(passageiros);
  }

  async create(req: Request, res: Response) {
    const {
      nomepassageiro,
    }: {
      nomepassageiro: string;
    } = req.body;
    const passageiro = new Passageiros();
    passageiro.nomepassageiro = nomepassageiro;

    const repo = AppDataSource.getRepository(Passageiros);
    await repo.save(passageiro);

    res.json(passageiro);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Passageiros);
    const passageiro = await repo.findOneBy({
      codigopassageiro: parseInt(id, 10),
    });

    res.json(passageiro);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nomepassageiro } = req.body;

    const repo = AppDataSource.getRepository(Passageiros);
    const passageiro = await repo.findOneBy({
      codigopassageiro: parseInt(id, 10),
    });
    passageiro.nomepassageiro = nomepassageiro;

    await repo.save(passageiro);
    res.json(passageiro);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Passageiros);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar Passageiro" });
  }
}
