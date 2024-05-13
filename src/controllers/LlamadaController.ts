import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";

class LlamadaController extends AbstractController {
  // Singleton
  // Atributos de clase
  private static _instance: LlamadaController;
  public static get instance(): LlamadaController {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new LlamadaController("llamada");
    return this._instance;
  }

  protected initializeRoutes(): void {
    this.router.get("/numLlamadas", this.getnumLlamadas.bind(this));
    this.router.get("/fechaLlamada", this.getfechaLlamada.bind(this));
    this.router.get("/motivoLlamada", this.getmotivoLlamada.bind(this));
    this.router.get("/temaLlamada", this.gettemaLlamada.bind(this));
    this.router.get("/duracionLlamada", this.getduracionLlamada.bind(this));
    this.router.get("/nivelSatisfaccion", this.getnivelSatisfaccion.bind(this));
    this.router.get("/promedioDuracion", this.getpromedioDuracion.bind(this));
    this.router.get("/promedioServicio", this.getpromedioServicio.bind(this));
    this.router.get("/promedioLlamadas", this.getpromedioLlamadas.bind(this));
    this.router.get("/semaforo", this.getsemaforo.bind(this));
    this.router.get("/sentimiento", this.getsentimiento.bind(this));
  }

  private async getnumLlamadas(req: Request, res: Response) {
    try {
      const numeroLlamadas = await db["Llamada"].count();
      res.status(200).json({LlamadasTotales: numeroLlamadas});
      console.log("Numero de llamadas totales");
  } catch (err) {
      console.log(err);
      res.status(500).send("Error en LlamadaController");
  }
}

  private async getfechaLlamada(req: Request, res: Response) {
    try {
      const fechaLlamadas = await db["Llamada"].findAll({
        attributes: ['idLlamada','fechaInicio', 'fechaFin']
      });
      res.status(200).send(fechaLlamadas);
      console.log("Obteniendo fechas de llamadas");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en UsuarioController");
    }
  }

  private async getmotivoLlamada(req: Request, res: Response) {
    try {
      const motivoLlamadas = await db["Llamada"].findAll({
        attributes: ['idLlamada','motivo']
      });
      res.status(200).send(motivoLlamadas);
      console.log("Obteniendo motivo de llamadas");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en UsuarioController");
    }
  }

  private async gettemaLlamada(req: Request, res: Response) {
    try {
      const temaLlamadas = await db["Llamada"].findAll({
        attributes: ['idLlamada','tema']
      });
      console.log("Obteniendo tema de llamadas");
      res.status(200).send(temaLlamadas);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en UsuarioController");
    }
  }

  private async getduracionLlamada(req: Request, res: Response) {
    try {
      console.log("Calculando duración de llamadas");
      const llamadas = await db["Llamada"].findAll({
        attributes: ['idLlamada', 'fechaInicio', 'fechaFin']
      });
      const duracionLlamadas = llamadas.map((llamada: any) => {
        const fechaInicio = new Date(llamada.fechaInicio);
        const fechaFin = new Date(llamada.fechaFin);
        const duracionMs = fechaFin.getTime() - fechaInicio.getTime();
        const duracionMinutos = duracionMs / 60000;
        return {
          idLlamada: llamada.idLlamada,
          duracion: duracionMinutos
        };
      });
      res.status(200).json({duracionLlamadas});
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en calcularDuracionLlamada");
    }
  }

  private async getnivelSatisfaccion(req: Request, res: Response) {
    try {
      console.log("UsuarioController works");
      res.status(200).send("UsuarioController works");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en UsuarioController");
    }
  }

  private async getpromedioDuracion(req: Request, res: Response) {
    try {
      const numeroLlamadas = await db["Llamada"].count();
      const llamadas = await db["Llamada"].findAll({
        attributes: ['fechaInicio', 'fechaFin']
      });
      let sumaDuracionesMs = 0;
      for (const llamada of llamadas) {
        const fechaInicio = new Date(llamada.fechaInicio);
        const fechaFin = new Date(llamada.fechaFin);
        const duracionMs = fechaFin.getTime() - fechaInicio.getTime();
        sumaDuracionesMs += duracionMs;
      }
      const duracionPromedioMs = sumaDuracionesMs / numeroLlamadas;
      const duracionPromedioMinutos = duracionPromedioMs / 60000;
      res.status(200).json({ duracionPromedioMinutos });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en promedio de duracion de llamadas");
    }
  }
     

  private async getpromedioServicio(req: Request, res: Response) {
    try {
      console.log("UsuarioController works");
      res.status(200).send("UsuarioController works");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en UsuarioController");
    }
  }

  private async getpromedioLlamadas(req: Request, res: Response) {
    try {
      console.log("UsuarioController works");
      res.status(200).send("UsuarioController works");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en UsuarioController");
    }
  }

  private async getsemaforo(req: Request, res: Response) {
    try {
      console.log("UsuarioController works");
      res.status(200).send("UsuarioController works");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en UsuarioController");
    }
  }

  private async getsentimiento(req: Request, res: Response) {
    try {
      console.log("UsuarioController works");
      res.status(200).send("UsuarioController works");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en UsuarioController");
    }
  }
}

export default LlamadaController;
