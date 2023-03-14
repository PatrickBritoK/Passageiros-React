import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("AEROPORTO_PATRICKs")
export class Aeroporto {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;

  @Column({ type: "varchar2" })
  endereco: string;
}


