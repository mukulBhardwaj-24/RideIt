const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName : {
        firstName : {
            type : String,
            requried : true,
            minlength : [3, 'First name must be atleast 3 characters long']
        },
        lastName : {
            type : String,
            minlength : [3, 'Last name must be at least 3 characters long']
        },
        email : {
            type : String,
            required : true,
            unique : true,
            minlength : [5, 'Last name must be at least 3 characters long']
        },
        password : {
            type : String, 
            required : true
        },
        socketId : {
            tyep : String
        }
    }
})