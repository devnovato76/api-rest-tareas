import { request, response } from "express";
import Tarea from "../models/tareas.models.js";



const tareasGet = async(req = request, resp = response) => {

  const {limit ="", desde = 0} = req.query;
  const query = {activo: true}
  const [total, tareas] = await Promise.all([
    Tarea.countDocuments(query),
    Tarea.find(query).skip(Number(desde)).limit(Number(limit)),
  ]);
     
  resp.status(200).json({
    sucsess: true,
    msg: "Estas son todas las tareas",
    total,
    tareas
  });
};
const tareaGet = async(req = request, resp = response) => {
  const { id } = req.params;
  const tarea = await Tarea.findById(id);
  const {
    title,
    description,
    estado = "Pendiente",
    activo,
    createAt: creada,
  } = tarea;

  resp.status(200).json({
    sucsess: true,
    msg: `Tarea con ID ${id} encontrada`,
    title,
    description,
    estado,
    activo,
    creada,
  });
};

const tareaPost = async (req = request, resp = response) => {
  const body = req.body;
  const tarea = new Tarea(body);
  await tarea.save();
  const {
    title,
    description,
    estado = "Pendiente",
    activo,
    createAt: creada,
  } = tarea;
  resp.status(201).json({
    sucsess: true,
    msg: "Tarea Creada Correctamente",
    title,
    description,
    estado,
    activo,
    creada,
  });
};

const tareaPut = async (req = request, resp = response) => {
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
    sucsess: true,
    msg: "Tarea actualizada corectamente",
    title,
    description,
    estado,
    activo,
    actualizada,
  });
};

const tareaDelete = async (req = request, resp = response) => {
  const { id } = req.params;
  const tarea = await Tarea.findByIdAndUpdate(id, { activo: false });
  const {
    title,
    description,
    estado = "Pendiente",
    activo,
    createAt: eliminada,
  } = tarea;
  resp.status(200).json({
    sucsess: true,
    msg: "Tarea borrada correctamente",
    title,
    description,
    estado,
    activo,
    eliminada,
  });
};

export { 
    tareasGet,
    tareaGet,
    tareaPost,
    tareaPut,
    tareaDelete
            };