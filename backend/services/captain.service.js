const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({firstName, lastName, email, password, color, capacity, plate, vehicleType}) => {
    if(!firstName || !lastName || !email || !password || !color || !capacity || !plate || !vehicleType) throw new Error('All fields are required');

    const captain = captainModel.create({
        fullName : {
            firstName,
            lastName
        },
        email,
        password,
        vehicle : {
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}