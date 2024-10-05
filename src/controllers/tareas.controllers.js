import { request, response } from "express";
import Tarea from "../models/tareas.models.js";



const tareasGet = (req = request, resp = response) => {
  resp.json({
    msg: "get  API",
  });
};
const tareaGet = (req = request, resp = response) => {
  resp.json({
    msg: "get ID API",
  });
};

const tareaPost = async(req, resp) => {
    const body = req.body;
    const tarea = new Tarea(body);
    await tarea.save();
      resp.json({
        msg: "Tarea Creada Correctamente",
        tarea
       
      });
};

const tareaPut = (req, resp) => {
      resp.json({
        msg: "put  API",
      });
};

const tareaDelete = (req, resp) => {
  resp.json({
    msg: "delete  API",
  });
};

export { 
    tareasGet,
    tareaGet,
    tareaPost,
    tareaPut,
    tareaDelete
            };