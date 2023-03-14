import express from "express";
import AppDataSource from "./config/Database";
import { AeroportoController   } from "./controller/AeroportoController";
import { PassageiroController} from "./controller/passageiroController";
import { VooController } from "./controller/VooController";

AppDataSource.initialize()
  .then(() => {
    console.log("Conectado com sucesso ao banco");
    const app = express();
    app.use(express.json());

    app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      next();
    });

    app.get('/aeroporto/todos', new AeroportoController().list);
    app.post("/aeroporto", new AeroportoController().create);
    app.get("/aeroporto/:id", new AeroportoController().get);
    app.put("/aeroporto/:id", new AeroportoController().update);
    app.delete("/aeroporto/:id", new AeroportoController().delete);

    app.get('/passageiros/todos', new PassageiroController().list);
    app.post("/passageiros", new PassageiroController().create);
    app.get("/passageiros/:id", new PassageiroController().get);
    app.put("/passageiros/:id", new PassageiroController().update);
    app.delete("/passageiros/:id", new PassageiroController().delete);

    app.get('/voo/todos', new VooController().list);
    app.post("/voo", new VooController().create);
    app.get("/voo/:id", new VooController().get);
    app.put("/voo/:id", new VooController().update);
    app.delete("/voo/:id", new VooController().delete);

    app.listen(8007);
  })
  .catch((e) => console.log("Erro ao conectar ao banco: ", e));
