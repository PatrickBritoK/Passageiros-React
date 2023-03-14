import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("PATRICK_VOO") 
export class Voo {
  @PrimaryGeneratedColumn()
  codigoVoo: number;

  @Column({ type: "varchar2", nullable: false })
  destino: string;

  @Column({ type: "varchar2", nullable: false })
  saida: string;
}