const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName :{
        type : String,
        required : true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
  
})

const Teacher = mongoose.model("teacher", teacherSchema);
module.exports = Teacher;
