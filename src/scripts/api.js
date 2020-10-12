(function () {
  const { MongoClient } = require("mongodb");
  const url = "mongodb://localhost:27017";
  const dbName = "delicacy";

  function apiController() {
    function getData() {
      return new Promise(async (resolve, reject) => {
        const client = new MongoClient(url, { useUnifiedTopology: true });
        try {
          await client.connect();
          const db = client.db(dbName);
          const results = db.collection("restaurants").find();
          resolve(await results.toArray());
          client.close();
        } catch (error) {
          reject(error);
        }
      });
    }

    return {
      getData,
    };
  }

  module.exports = apiController();
})();
