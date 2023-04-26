const mongoose = require('mongoose');
const stdloginSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required : true
        
    },
    lastName :{
        type : String,
        required : true
        
    },
    userId :{
        type : String,
        required : true
        
    },
    password :{
        type : String,
        required : true
        
    }

});
const Stdlogin = mongoose.model('user', stdloginSchema);
module.exports = Stdlogin;