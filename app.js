const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const chalk = require("chalk");
// const fs = require("fs");
const { MongoClient } = require("mongodb");
const apiController = require("./src/scripts/api");
// const open = require("open");

const app = express();
const port = process.env.PORT || 3000;
const configObj = {
  title: "Delicacy",
};

app.use("/images", express.static(path.resolve(__dirname, "./src/images/")));
app.use("/css", express.static(path.resolve(__dirname, "./src/css/")));
app.use(
  "/css",
  express.static(path.resolve(__dirname, "./node_modules/mdbootstrap/css/"))
);
app.use(
  "/js",
  express.static(path.resolve(__dirname, "./node_modules/mdbootstrap/js/"))
);
app.use(
  "/css",
  express.static(
    path.resolve(__dirname, "./node_modules/@fortawesome/fontawesome-free/css/")
  )
);
app.use(
  "/webfonts",
  express.static(
    path.resolve(
      __dirname,
      "./node_modules/@fortawesome/fontawesome-free/webfonts/"
    )
  )
);

app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "main",
  })
);

// set views folder. otherwise express looks for the views folder in the root directory
app.set("views", path.resolve(__dirname, "./src/views/"));
app.set("view engine", "hbs");

app.get("/", async (req, res) => {
  try {
    const restaurants = await apiController.getData();
    // console.log(restaurants);
    // res.send(restaurants);
    res.render("home", { configObj, restaurants });
  } catch (error) {
    console.log(error);
  }
});

// Express uses path-to-regexp for matching the route paths
app.get("/:rid", async (req, res) => {
  try {
    const rid = req.params.rid.toString();
    const restById = await apiController.getByID(rid);
    res.send(restById);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, (err) => {
  return err
    ? console.log(chalk.red(err))
    : console.log(chalk.cyan(`Server started and running on port ${port}`));
  // open(`http://localhost:${port}`);
});
