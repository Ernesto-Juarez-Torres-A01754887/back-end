import { Request, Response } from "express";
import AbstractController from "./AbstractController";

class TarjetaController extends AbstractController {
  // Singleton
  // Atributos de clase
  private static _instance: TarjetaController;
  public static get instance(): TarjetaController {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new TarjetaController("tarjeta");
    return this._instance;
  }

  protected initializeRoutes(): void {
    // this.router.get("/numCuenta", this.getnumCuenta.bind(this));
  }

  // private async getnumCuenta(req: Request, res: Response) {
  //   try {
  //     console.log("TarjetaController works");
  //     res.status(200).send("TarjetaController works");
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).send("Error en TarjetaController");
  //   }
  // }
}

export default TarjetaController;
import { Request, Response } from 'express';
import AbstractController from './AbstractController';
//import db from "../models";

class TarjetaController extends AbstractController{
    //Singleton
    //Atributos de clase
    private static _instance: TarjetaController;
    public static get instance():TarjetaController{
        if(this._instance){
            return this._instance;
        }
        this._instance = new TarjetaController("cliente");
        return this._instance;

    }

    protected initializeRoutes(): void{
        this.router.get("/numCuenta",this.getNumCuenta.bind(this));
        this.router.get("/saldo",this.getSaldo.bind(this));
    }

    private async getNumCuenta(req: Request, res: Response){
        try{
            console.log("ClienteController works");
            res.send("ClienteController works");
        }catch(err){
            console.error(err);
            res.status(500).send("Error al crear")
        }

    }

    private async getSaldo(req: Request, res: Response){
        try{
            console.log("ClienteController works");
            res.send("ClienteController works");
        }catch(err){
            console.error(err);
            res.status(500).send("Error al crear")
        }

    }

}

export default TarjetaController;