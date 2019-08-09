const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema ({

    items: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    }
    
});

module.exports = OrderSchema;