const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const chalk = require("chalk");
const fs = require("fs");
const open = require("open");

const app = express();
const port = process.env.PORT || 3000;
const configObj = {
    title : "Delicacy"
}
const api = require("./src/scripts/api")(app, fs);

app.use("/images",express.static(path.resolve(__dirname, './src/images/')));
app.use("/css", express.static(path.resolve(__dirname, './src/css/')));
app.use("/css", express.static(path.resolve(__dirname, './node_modules/mdbootstrap/css/')));
app.use("/js", express.static(path.resolve(__dirname, './node_modules/mdbootstrap/js/')));
app.use("/css", express.static(path.resolve(__dirname, './node_modules/@fortawesome/fontawesome-free/css/')));
app.use("/webfonts", express.static(path.resolve(__dirname, './node_modules/@fortawesome/fontawesome-free/webfonts/')));

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));

// set views folder. otherwise express looks for the views folder in the root directory
app.set('views',  path.resolve(__dirname,'./src/views/'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', configObj);
});

app.listen(port, (err) => {
    return (err) ? console.log(chalk.red(err)) :
    open(`http://localhost:${port}`);
});