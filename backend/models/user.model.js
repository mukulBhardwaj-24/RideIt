const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
        }
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
})

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async (password) => {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;