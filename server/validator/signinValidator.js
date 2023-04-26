const validator = require("validator");
const isEmpty = require("./isEmpty");
module.exports = function SigninValidation(data) {
    let regex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
    let errors = {};
    //Convert empty field to an empty string so we use validator
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    //Email checks
    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }
    else if (!validator.isEmail(data.email)) {
        errors.email = "Format email required";
    }

    //Password checks
    if (validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    } else if (!regex.test(data.password)) {
        console.log("Password should have")
        errors.password =
            "Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long";
    }
    console.log(isEmpty(errors))
    return {
        errors,
        isValid: isEmpty(errors),
    };
};