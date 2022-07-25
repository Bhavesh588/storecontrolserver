const express = require("express");
const router = express.Router();
const db = require("../models");


 // get All notifications
router.get("/", (req, res) => {
    db.Notification_master.findAll().then((notification) => res.send(notification));
});

 // Insert notification
router.post("/new", (req, res) => {
    console.log(req.body)
    db.Notification_master.create(req.body).then((notification) => res.send(notification));
});

module.exports = router;
