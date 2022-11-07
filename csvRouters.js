const mongo = require("mongodb");

const mongoClient = mongo.MongoClient;

const url = "mongodb://127.0.0.1:27017/16aug";

mongoClient
  .connect(url)
  .then((database) => {
    
    const dbo = database.db("16aug");
    var data = [];
    const csv = require("csv-parser");
    const fs = require("fs");
    const result = [];
    fs.createReadStream("simple.csv")
      .pipe(csv({}))
      .on("data", (data) => result.push(data))
      .on("end", () => {
        // console.log(result);
        dbo
          .collection("user")
          .insertMany(result)
          .then((result) => {
            // console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      });

  })
  .catch((err) => {
    console.log(err);
  });
