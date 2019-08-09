const express = require("express");
const router = express.Router();
const OrderRoutes = require("./order_routes");
const passport = require("passport");

router.get("/", (req, res) => res.send("Welcome"));
router.use("/orders", OrderRoutes);


module.exports = router;