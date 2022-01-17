const express = require("express"),
  {
    access,
    accessToken,
    confirmation,
    register,
    simulate,
    validation,
  } = require("../controllers/mpesaControllers.js"),
  router = express.Router();

// Obtain Access Token
router.get("/access-token", access, accessToken);
router.get("/register", access, register);
router.post("/confirmation", confirmation);
router.post("/validation", validation);
router.get("/simulate", access, simulate);

// router.post("/stk-push", access, stkPush);

module.exports = router;
