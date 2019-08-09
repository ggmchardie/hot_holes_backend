const OrderModel = require("./../database/models/order_model");

async function create(req, res, next) {
  const { items, name, phone } = req.body;
  OrderModel.create(
    {
      items: items,
      name: name,
      phone: phone,
    }
  );

  res.send("Order Created");
}

  async function index(req, res) {
    const orders = await OrderModel.find(
      { }
    )
    res.send(orders);
  }

  
  function show(req, res) {
    const { id } = req.params;
    const order = req.user.order.id(id);
    if (order) { 
    return res.json(order);
    }
    return res.status(404).json({_error: "Order not found"});
  }
  
  function test(req,res) {
    res.send("Test");
  }
 
  
  module.exports = {
    create,
    index,
    show,
    test
  };