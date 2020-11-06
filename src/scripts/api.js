(function () {
  const { MongoClient, ObjectID } = require("mongodb");
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

    function getByID(id) {
      return new Promise(async (resolve, reject) => {
        const client = new MongoClient(url, { useUnifiedTopology: true });
        try {
          await client.connect();
          const db = client.db(dbName);
          const results = await db
            .collection("restaurants")
            .findOne({ _id: ObjectID(id) });
          resolve(results);
        } catch (error) {
          console.log(error);
          reject(error);
        }
      });
    }

    return {
      getData,
      getByID,
    };
  }

  module.exports = apiController();
})();
