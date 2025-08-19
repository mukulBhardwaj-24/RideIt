const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db.js')
const userRoute = require('./routes/user.routes.js')
const captainRoute = require('./routes/captain.routes.js');
const mapRoute = require('./routes/maps.routes.js');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use('/users', userRoute)
app.use('/captain', captainRoute)
app.use('/maps', mapRoute);

module.exports = app;