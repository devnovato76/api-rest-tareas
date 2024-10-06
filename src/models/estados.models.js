import { Schema, model } from "mongoose";

const estadoSchema = Schema({
    estado: {
        type: "String",
        default: "Pendiente"
    }
});

export default model("Estado", estadoSchema);