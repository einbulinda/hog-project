const express = require("express"),
  {
    authUser,
    createAddress,
    getAddress,
    getAddressById,
    registerUser,
    updateUser,
  } = require("../controllers/userControllers.js"),
  router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.patch("/update", updateUser);
router.post("/address", createAddress);
router.get("/address/:id", getAddress);
router.get("/address-id/:id", getAddressById);

module.exports = router;
