const mongoose = require("mongoose");
const OrderSchema = require("../schemas/order_schema");
const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;