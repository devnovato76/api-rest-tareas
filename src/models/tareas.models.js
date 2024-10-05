import {Schema, model} from 'mongoose';

const tareaSchema = Schema({
  title: {
    type: "String",
    required: [true, "El titulo es Obligatorio"],
  },
  description: {
    type: "String",
    required: [true, "La  descripción es Obligatorio"],
  },
  estado: {
    type: "String",
    enum: ["Pendiente", "En Proceso", "Completada"],
    default: "Pendiente"
  },
  createAt: {
    type: "Date",
    default: Date.now(),
  },
});
export default model('Tarea', tareaSchema);