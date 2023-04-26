const mongoose = require('mongoose');
const stdloginSchema = new mongoose.Schema({
    firstName: {
        required : true,
        type : String
    },
    lastName :{
        required : true,
        type : String
    },
    userId:{
        required : true,
        type : String
    },
    password:{
        required : true,
        type : String
    }

});
const Stdlogin = mongoose.model('stdlogin',stdloginSchema);
module.exports = Stdlogin;