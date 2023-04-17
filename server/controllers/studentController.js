const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User model
const Student = require("../models/studentSchema");

// Input validation
const SignupValidator = require("../validator/signupValidator");
const SigninValidator = require("../validator/signinValidator");

module.exports = {

// post

// Sign up

    Signup: async (req, res) => {
        const { firstName, lastName, email, password } = req.body;
        const { errors, isValid } = SignupValidator(req.body);

        try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
            await Student.findOne({ email }).then(async (exist) => {
            if (exist) {
                errors.email = "Email already in use";
                res.status(404).json(errors);
            } else {
                const hashedpassword = bcrypt.hashSync(password, 8);
                const result = await Student.create({
                firstName,
                lastName,
                email,
                password: hashedpassword,
                role: "student",
                courseReg: "false"
                });
                res.status(201).json({ message: "user added with success" });
            }
            });
        }
        } catch (error) {
            console.log(error.message);
        }
    },

// Sign in

    Signin: async (req, res) => {
        const { email, password } = req.body;
        const { errors, isValid } = SigninValidator(req.body);

        try {
            if (!isValid) {
                console.log("Validation error");
                res.status(404).json(errors);
            } else {
                await Student.findOne({ email }).then(async (student) => {
                if (!student) {
                    errors.email =
                    "Email does not exist ! please Enter the right Email or You can make account";
                    res.status(404).json(errors);
                }
                // Compare sent in password with found user hashed password
                const passwordMatch = bcrypt.compareSync(password, student.password);
                if (!passwordMatch) {
                    errors.password = "Wrong Password";
                    res.status(404).json(errors);
                } else {
                    // generating a token and storing it in a cookie
                        const token = jwt.sign({ _id: student._id, role: student.role }, "sooraj_DOING_GOOD",
                        {
                            expiresIn: "8h",
                        });
                        const options = {
                            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
                            httpOnly: true,
                            sameSite: "lax",
                        };
                        const data = {
                            id: student._id,
                        };
                        res.status(201).json({ token, role: student.role });
                        000
                }
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    },

// verification token

    verifytoken: async (req, res) =>{
        try{
            console.log(req.body.token)
            const token = req.body.token ;
            const decoded = jwt.verify(token,"sooraj_DOING_GOOD")
        if (decoded) {
            res.status(200).json(decoded)
        }

        }catch(error) {
            return res.status(401).json({
                message : 'Auth Failed'
            });
        }
    },

}