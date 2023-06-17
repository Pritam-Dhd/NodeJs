const { MongoClient } = require("mongodb");
const dbConnection = require("./Connection");

// Connecting to the MongoDB server
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Name of the database to work with
const database = "Student";

// ❓Function to retrieve data from MongoDB
const getData = async () => {
  // Connect to the MongoDB database
  let result = await client.connect();
  // Access the specified database
  let dbs = result.db(database);
  // Retrieve the "students" collection from the database
  let collection = dbs.collection("students");
  // Retrieve all documents from the "students" collection and convert them into an array
  let response = await collection.find({ name: "Pritam" }).toArray();
  console.log(response);
  // To use outside of the function
  return collection;
};

// getData();

// ❓Just using the function for connecton to the collection and then using node commands
getData().then((res) => {
  res
    .find({ name: "Pritam1" })
    .toArray()
    .then((data) => [console.log(data)]);
});

// ❓Using the connection function from connection file
dbConnection().then((res) => {
  res
    .find({ name: "Pritam2" })
    .toArray()
    .then((data) => [console.log(data)]);
});