const express = require("express");
const router = express.Router();
const db = require("../models");
// prettier-ignore
// All Order Data
router.get("/", (req, res) => {
    db.Order_master.findAll({
        include: [{model: db.Order_product, as: 'order_product'}]
    }).then((order) => res.send(order));
});

// prettier-ignore
// Insert order master
router.post("/new", (req, res) => {
    db.Order_master.create(req.body).then((submittedOrder) => res.send(submittedOrder));
});

module.exports = router;
