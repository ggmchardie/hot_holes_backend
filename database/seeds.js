require("./connect");
const mongoose = require("mongoose");
const OrderModel = require("./models/order_model")

const Order = OrderModel({
    order: [],
    name: [],
    phone: [],

});

console.log("Order saved")