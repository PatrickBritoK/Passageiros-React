import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("PATRICK_PASSAGEIROS2") 
export class Passageiros {
  @PrimaryGeneratedColumn()
  codigopassageiro: number;

  @Column({ type: "varchar2", nullable: false })
  nomepassageiro: string;
}