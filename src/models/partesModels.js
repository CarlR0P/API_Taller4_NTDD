const mongoose = require("mongoose"); // importando el componente mogoose
const partesSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        requiered: true,
    },
    precio: {
        type: Number,
        requiered: true,
    },
    disponibilidad: {
        type: Boolean,
        requiered: true,
    },
    stock: {
        type: Number,
        requiered: true,
    },
    numeroSerie: {
        type: String,
        requiered: false,
    },
    fecha: {
        type: Date,
        requiered: false,
    },
    descripcion: {
        type: String,
        requiered: false,
    },
    especificaciones: {
        type: String,
        requiered: false,
    }
});
module.exports = mongoose.model("Partes", partesSchema);