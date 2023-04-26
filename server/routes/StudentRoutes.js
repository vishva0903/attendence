const express = require("express");
const StdLoginController = require("../controllers/StdLoginController");
const router = express.Router();

  router.post("/Signup", StdLoginController.Signup)

  router.post("/Login", StdLoginController.Login)
  
  router.post("/Verifytoken", StdLoginController.Verifytoken)

module.exports = router;