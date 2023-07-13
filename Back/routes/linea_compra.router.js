const router = require("express").Router();

router.get("/linea_compra_get", (req, res) => {
    res.send("I am a Router get linea compras");
});

router.get("/linea_compra_get_all", (req, res) => {
    res.send("I am a Router get todos linea compras");
});

router.post("/linea_compra_post", (req, res) => {
    res.send("I am a Router post linea compras");
});

router.put("/linea_compra_put", (req, res) => {
    res.send("I am a Router send linea compras");
});

router.delete("/linea_compra_delete", (req, res) => {
    res.send("I am a Router delete linea compras");
});

module.exports = router;

