const express = require("express");
const StdLoginController = require("../controllers/StdLoginController");
const router = express.Router();


 

  router.post("/Signup", StdLoginController.Signup)



  router.post("/Signin", StdLoginController.Signin)
  


  router.post("/Verifytoken", StdLoginController.Verifytoken)

module.exports = router;