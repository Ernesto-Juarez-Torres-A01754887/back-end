import { Request, Response, NextFunction } from "express";
import AbstractController from "./AbstractController";
import db from "../models";

class TransaccionController extends AbstractController {
  // Singleton
  private static _instance: TransaccionController;
  public static get instance(): TransaccionController {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new TransaccionController("transaccion");
    return this._instance;
  }

  protected initializeRoutes(): void {
    this.router.post("/cargarTransacciones", this.cargarTransacciones.bind(this));
  }

  private async cargarTransacciones(req: Request, res: Response) {
    try {
      const transacciones = req.body;
      if (!Array.isArray(transacciones)) {
        return res.status(400).send("Se espera un arreglo de transacciones");
      }

      const transaccionesCreadas = [];
      for (const transaccion of transacciones) {
        const { numCuenta, monto, detalle, estatus, nombreTransaccion } = transaccion;
        if (!numCuenta || monto == null || !detalle || !estatus || !nombreTransaccion) {
          return res.status(400).send("Todos los campos son requeridos para cada transacción");
        }

        const nuevaTransaccion = await db.Transaccion.create({
          numCuenta,
          fecha: new Date(),
          detalle,
          estatus,
          monto,
          nombre: nombreTransaccion
        });
        transaccionesCreadas.push(nuevaTransaccion);
      }

      res.status(201).json(transaccionesCreadas);
    } catch (err) {
      console.error("Error al cargar transacciones:", err);
      res.status(500).send("Error al cargar transacciones");
    }
  }
}

export default TransaccionController;
