const express = require("express");
const router = express.Router(); //manejador de rutas de express
const partesSchema = require("../models/partesModels");
//Nueva parte
router.post("/partes", (req, res) => {
    const parte = partesSchema(req.body);
    parte
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;

