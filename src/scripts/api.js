(function () {
    'use strict'
    const path = require("path");

    const routes = (app, fs) => {
        const data_dir = path.resolve(__dirname,"../../data/restaurants.json");

        app.get("/data",(req, res) => {  
            fs.readFile(data_dir, 'utf-8', (err, data)=>{
                if(err){
                    throw err;
                }
                res.send(JSON.parse(data));
            })
        })

        
    }

    module.exports = routes;
})();