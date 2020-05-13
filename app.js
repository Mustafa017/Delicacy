const express = require("express");
const path = require("path");

const app = express();

app.use("/images",express.static(path.resolve(__dirname, './src/images/')));
app.use("/css", express.static(path.resolve(__dirname, './src/css/')));
app.use("/css", express.static(path.resolve(__dirname, './node_modules/bootstrap/dist/css/')));
app.use("/js", express.static(path.resolve(__dirname, './node_modules/bootstrap/dist/js')));
app.use("/js", express.static(path.resolve(__dirname, './node_modules/jquery/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/views/index.html'));
});

app.listen(3000, (err) => {
    return (err) ? console.log(err) :
    console.log("Server up and running on port 3000");
});