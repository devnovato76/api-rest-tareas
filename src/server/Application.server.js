import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "../routes/tareas.routes.js";
import { dbconnection } from "../database/config.js";


export class Application {
  constructor() {
    dotenv.config();
    this.port = process.env.PORT;
    this.tareasPath = "/api/tareas";
    this.app = express();
     this.conectarDB();
    this.middlewares();
    this.defineRouters();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("src/public"));
  }

  defineRouters() {
    this.app.use(this.tareasPath, router);
  }

  start() {
    this.app.listen(this.port, () =>
      console.log(`Aplicación de servidor en URL http://localhost:${this.port}`)
    );
  }
  async conectarDB() {
    await dbconnection();
  }
}