// ❗Just Connection file
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const database = "Student";
const client = new MongoClient(url);


const dbConnection = async () => {
  let result = await client.connect();
  let dbs = result.db(database);
  let collection = dbs.collection("students");
  return collection;
};

module.exports =dbConnection;