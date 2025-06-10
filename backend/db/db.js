const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_CONNECT}/${process.env.DB_NAME}`)
        console.log(`\n MongoDb connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGDB connection error  ", error);
        process.exit(1);
    }
}

module.exports = connectToDb;