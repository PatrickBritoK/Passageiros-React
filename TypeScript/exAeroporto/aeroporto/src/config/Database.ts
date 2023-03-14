import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Aeroporto  } from "../model/AeroportoModel";
import { Passageiros} from "../model/PassageiroModel";
import { Voo } from "../model/VooModel";


const AppDataSource = new DataSource({
  type: 'oracle',
  host: '192.168.0.50',
  port: 1521,
  username: 'system',
  password: 'pulsati2023',
  database: 'xe',
  entities: [Aeroporto, Passageiros, Voo],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  // synchronize:true
});
console.log('AppDataSource', AppDataSource.initialize);
export default AppDataSource;
