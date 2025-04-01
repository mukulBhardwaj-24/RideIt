const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get("/", () => {
    res.send("Hello World");
})

module.exports = app;