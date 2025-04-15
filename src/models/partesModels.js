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
    fabricante: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        requiered: true,
    }
});
module.exports = mongoose.model("Partes", partesSchema);