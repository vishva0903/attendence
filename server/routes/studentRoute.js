const express = require("express");
const studentController = require("../controllers/studentController");

const router = express.Router();

    // Sign up

    router.post("/Signup", studentController.Signup)

    // Sign in

    router.post("/Signin", studentController.Signin)
    
    // Verification Token

    router.post("/verifytoken", studentController.verifytoken)

module.exports = router;