import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Voo } from "../model/VooModel";

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
  