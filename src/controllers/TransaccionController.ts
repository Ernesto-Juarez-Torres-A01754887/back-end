import { Request, Response } from "express";
import AbstractController from "./AbstractController";

class TransaccionController extends AbstractController {
  // Singleton
  // Atributos de clase
  private static _instance: TransaccionController;
  public static get instance(): TransaccionController {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new TransaccionController("transaccion");
    return this._instance;
  }

  protected initializeRoutes(): void {
    // this.router.get("/fechaTransaccion", this.getfechaTransaccion.bind(this));
  }

  // private async getfechaTransaccion(req: Request, res: Response) {
  //   try {
  //     console.log("TransaccionController works");
  //     res.status(200).send("TransaccionController works");
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).send("Error en TransaccionController");
  //   }
  // }
}

export default TransaccionController;
import { Request, Response } from 'express';
import AbstractController from './AbstractController';
//import db from "../models";

class TransaccionController extends AbstractController{
    //Singleton
    //Atributos de clase
    private static _instance: TransaccionController;
    public static get instance():TransaccionController{
        if(this._instance){
            return this._instance;
        }
        this._instance = new TransaccionController("cliente");
        return this._instance;

    }

    protected initializeRoutes(): void{
        this.router.get("/id",this.getId.bind(this));
        this.router.get("/fecha",this.getFecha.bind(this));
        this.router.get("/detalle",this.getDetalle.bind(this));
        this.router.get("/estatus",this.getEstatus.bind(this));
        this.router.get("/monto",this.getMonto.bind(this));
        this.router.get("/numCuenta",this.getNumCuenta.bind(this));
    }

    private async getId(req: Request, res: Response){
        try{
            console.log("ClienteController works");
            res.send("ClienteController works");
        }catch(err){
            console.error(err);
            res.status(500).send("Error al crear")
        }

    }

    private async getFecha(req: Request, res: Response){
        try{
            console.log("ClienteController works");
            res.send("ClienteController works");
        }catch(err){
            console.error(err);
            res.status(500).send("Error al crear")
        }

    }

    private async getDetalle(req: Request, res: Response){
        try{
            console.log("ClienteController works");
            res.send("ClienteController works");
        }catch(err){
            console.error(err);
            res.status(500).send("Error al crear")
        }

    }

    private async getEstatus(req: Request, res: Response){
        try{
            console.log("ClienteController works");
            res.send("ClienteController works");
        }catch(err){
            console.error(err);
            res.status(500).send("Error al crear")
        }

    }

    private async getMonto(req: Request, res: Response){
        try{
            console.log("ClienteController works");
            res.send("ClienteController works");
        }catch(err){
            console.error(err);
            res.status(500).send("Error al crear")
        }

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
}

export default TransaccionController;