import Estado from "../models/estados.models.js";
import Tarea from "../models/tareas.models.js";

const esEstadoValido = async (estado = "Pendiente") => {
  const existeEstado = await Estado.findOne({ estado });
  if (!existeEstado) {
    throw new Error(`El estado ${estado} no está registrado en la DB`);
  }
};

const existeTareaPorId = async (id) => {
  const existeTarea = await Tarea.findById(id);
  if (!existeTarea) {
    throw new Error(`El id no existe ${id}`);
  }
};

export { esEstadoValido, existeTareaPorId };
