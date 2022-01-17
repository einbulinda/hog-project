const express = require("express"),
  {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
  } = require("../controllers/productControllers.js"),
  router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/create", createProduct);
router.patch("/update", updateProduct);

module.exports = router;
