import { Request, Response, NextFunction } from "express";
import AbstractController from "./AbstractController";
import db from "../models";

class TarjetaController extends AbstractController {
  // Singleton
  private static _instance: TarjetaController;
  public static get instance(): TarjetaController {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new TarjetaController("tarjeta");
    return this._instance;
  }

  protected initializeRoutes(): void {
    this.router.post("/cargarTarjetas", this.cargarTarjetas.bind(this));
  }

  private async cargarTarjetas(req: Request, res: Response) {
    try {
      const tarjetas = req.body;
      if (!Array.isArray(tarjetas)) {
        return res.status(400).send("Se espera un arreglo de tarjetas");
      }

      const tarjetasCreadas = [];
      for (const tarjeta of tarjetas) {
        const { numCuenta, saldo, tipo } = tarjeta;
        if (!numCuenta || saldo == null || !tipo) {
          return res.status(400).send("Todos los campos son requeridos para cada tarjeta");
        }

        const nuevaTarjeta = await db.Tarjeta.create({ numCuenta, saldo, tipo });
        tarjetasCreadas.push(nuevaTarjeta);
      }

      res.status(201).json(tarjetasCreadas);
    } catch (err) {
      console.error("Error al cargar tarjetas:", err);
      res.status(500).send("Error al cargar tarjetas");
    }
  }
}

export default TarjetaController;
