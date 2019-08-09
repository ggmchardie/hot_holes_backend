const express = require("express");
const { celebrate, Joi } = require("celebrate");
const router = express.Router();
const OrderController = require("../controllers/order_controller");


router.get("/", OrderController.index);

router.post("/", celebrate({
    body: {
        items: Joi.string().max(50),
        name: Joi.string().max(50),
        phone: Joi.string().max(10)
    }
}), 
 OrderController.create)
 //OrderController.test)

router.get("/:id", OrderController.show);

module.exports = router;