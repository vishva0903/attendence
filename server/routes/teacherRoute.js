const express = require("express");
const teacherController = require("../controllers/teacherController");

const router = express.Router();

    // Sign up

    router.post("/Signup", teacherController.Signup)

    // Sign in

    router.post("/Signin", teacherController.Signin)
    
    // Verification Token

    router.post("/Verifytoken", teacherController.Verifytoken)

module.exports = router;