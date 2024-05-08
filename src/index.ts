import Server from "./providers/Server";
import { PORT, NODE_ENV } from "./config";
import express from "express";
import NotificacionController from "./controllers/NotificacionController";
import UsuarioController from "./controllers/UsuarioController";
import ClienteController from "./controllers/ClienteController";
import LlamadaController from "./controllers/LlamadaController";

const server = new Server({
  port: PORT,
  env: NODE_ENV,
  middlewares: [express.json(), express.urlencoded({ extended: true })],
  controllers: [
    NotificacionController.instance,
    UsuarioController.instance,
    ClienteController.instance,
    LlamadaController.instance,
  ],
});

server.init();
