console.log('Hi')

const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.get("/start", (req, res) => {
    res.send("Hi");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})