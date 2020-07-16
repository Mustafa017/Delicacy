(function () {
    'use strict'
    
    const dataRouteFn = (app, fs) => {
        const data_dir = "./data/restaurants.json";

        app.get("/data", (req, res)=>{
            fs.readFile(data_dir, "utf-8", (err, data)=>{
                if(err){
                    throw err;
                }

                res.send(JSON.parse(data));
            });
        })
    }

    module.exports = dataRouteFn;
})();