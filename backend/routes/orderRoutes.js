const express = require("express"),
  {
    createOrder,
    getOrderDetails,
    getUserOrders,
  } = require("../controllers/ordersControllers.js"),
  router = express.Router();

router.post("/create", createOrder);
router.get("/:id", getUserOrders);
router.get("/details/:id", getOrderDetails);

module.exports = router;
