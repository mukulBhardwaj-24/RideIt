const userModel = require('../models/user.model.js');
const userService = require('../services/user.service.js')
const { validationResult } = require('express-validator')

module.exports.registerUser = async (req, res, next) => {

    const error = validationResult(req);
    if(!error.isEmpty())
    {
        return res.status(400).json({error : error.array()});
    }

    const {fullName, email, password} = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = userService.createUser({
        firstName : fullName.firstName,
        lastName : fullName.lastName,
        email, 
        password : hashedPassword
    })

    const token = user.generateAuthToken();

    res.status(201).json({user, token});
};