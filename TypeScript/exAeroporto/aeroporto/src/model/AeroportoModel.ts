import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// import { AeroportoController } from "../controller/AeroportoController";

@Entity("AEROPORTO_PATRICKs")
export class Aeroporto {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;

  @Column({ type: "varchar2" })
  endereco: string;
}

@Entity("teste") //fazer a tabela mais tarde
export class Passageiro {
  @PrimaryGeneratedColumn()
  codigoPassageiro: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;
}

@Entity("teste2") //fazer a tabela mais tarde
export class Voo {
  @PrimaryGeneratedColumn()
  codigoVoo: number;

  @Column({ type: "varchar2", nullable: false })
  destino: string;

  @Column({ type: "varchar2", nullable: false })
  saida: string;
}