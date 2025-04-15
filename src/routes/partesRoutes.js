const verifyToken = require('./validate_token');
const express = require("express");
const router = express.Router(); //manejador de rutas de express
const partesSchema = require("../models/partesModels");

//Nueva parte
router.post("/partes", verifyToken, (req, res) => {
    const parte = partesSchema(req.body);
    parte
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar todos las partes
router.get("/partes", (req, res) => {
    partesSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar una parte por su id
router.get("/partes/:id", (req, res) => {
    const { id } = req.params;
    partesSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un animal por su id
router.put("/partes/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, tipo, fabricante, modelo } = req.body;
    partesSchema
        .updateOne({ _id: id }, {
            $set: { nombre, tipo, fabricante, modelo }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un animal por su id
router.delete("/partes/:id", (req, res) => {
    const { id } = req.params;
    partesSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;




