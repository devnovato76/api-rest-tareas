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
    const { title, description, estado = "Pendiente", activo, createAt: creada } = tarea;
      resp.status(201).json({
        msg: "Tarea Creada Correctamente",
        title,
        description,
        estado,
        activo,
        creada,
      });
};

const tareaPut = async(req, resp) => {
    const body = req.body;
    const tarea = new Tarea(body);
    await tarea.save();
    const {
      title,
      description,
      estado = "Pendiente",
      activo,
      createAt: actualizada,
    } = tarea;
      resp.status(201).json({
        msg: "Tarea actualizada corectamente",
        title,
        description,
        estado,
        activo,
        actualizada,
      });
};

const tareaDelete = async(req, resp) => {
  const {id} = req.params;
  const tarea = await Tarea.findByIdAndUpdate(id, {activo: false});
  const {
    title,
    description,
    estado = "Pendiente",
    activo,
    createAt: eliminada,
  } = tarea;
  resp.status(200).json({
    msg: "Tarea borrada correctamente",
    title,
    description,
    estado,
    activo,
    eliminada
  });
};

export { 
    tareasGet,
    tareaGet,
    tareaPost,
    tareaPut,
    tareaDelete
            };