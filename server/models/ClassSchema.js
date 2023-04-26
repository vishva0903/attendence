const mongoose = require('mongoose')
const classSchema = new mongoose.Schema({
    Class: {
        type: String,
        require: true
    },
    Division: {
        type: String,
        require: true
    },
    TeacherName: {
        type: String,
        require: true
    },
    ClassroomNumber: {
        type: Number,
        require: true
    },
    Schedule: {
        type: String,
        require: true
    },
    Classcapacity: {
        type: Number,
        require: true
    }
})
const ClassSchema = mongoose.model("subject", classSchema);
module.exports=ClassSchema;