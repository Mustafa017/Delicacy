const express = require("express");
const path = require("path");

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/views/index.html'));
});

app.listen(3000, (err) => {
    return (err) ? console.log(err) :
    console.log("Server up and running on port 3000");
});