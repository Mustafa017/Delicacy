const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");


const app = express();
const configObj = {
    title : "Delicacy"
}

app.use("/images",express.static(path.resolve(__dirname, './src/images/')));
app.use("/css", express.static(path.resolve(__dirname, './src/css/')));
app.use("/css", express.static(path.resolve(__dirname, './node_modules/bootstrap/dist/css/')));
app.use("/js", express.static(path.resolve(__dirname, './node_modules/bootstrap/dist/js/')));
app.use("/js", express.static(path.resolve(__dirname, './node_modules/jquery/dist/')));

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

app.listen(3000, (err) => {
    return (err) ? console.log(err) :
    console.log("Server up and running on port 3000");
});