import { Request, Response, NextFunction } from "express";
import AbstractController from "./AbstractController";
import db from "../models";

class CuentaController extends AbstractController {
  // Singleton
  private static _instance: CuentaController;
  public static get instance(): CuentaController {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new CuentaController("cuenta");
    return this._instance;
  }

  protected initializeRoutes(): void {
    this.router.post("/cargarCuentas", this.cargarCuentas.bind(this));
  }

  private async cargarCuentas(req: Request, res: Response) {
    try {
      const cuentas = req.body;
      if (!Array.isArray(cuentas)) {
        return res.status(400).send("Se espera un arreglo de cuentas");
      }

      const cuentasCreadas = [];
      for (const cuenta of cuentas) {
        const { idCliente } = cuenta;
        if (!idCliente) {
          return res.status(400).send("El idCliente es requerido para cada cuenta");
        }

        const nuevaCuenta = await db.Cuenta.create({ idCliente });
        cuentasCreadas.push(nuevaCuenta);
      }

      res.status(201).json(cuentasCreadas);
    } catch (err) {
      console.error("Error al cargar cuentas:", err);
      res.status(500).send("Error al cargar cuentas");
    }
  }
}

export default CuentaController;
