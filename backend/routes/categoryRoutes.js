const express = require("express"),
  {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
  } = require("../controllers/categoryControllers.js"),
  router = express.Router();

router.post("/create", createCategory);
router.patch("/:id", updateCategory);
router.get("/", getCategories);
router.get("/:id", getCategory);

module.exports = router;
