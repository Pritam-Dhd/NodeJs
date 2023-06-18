// ❗Make a APi file to connect to MongoDB
const express = require("express");
const Connection = require("./Connection");

const app = express();

const PORT = 4000;
const hostname = "localhost";

// ❓Use params method instead of body to get data from URL
// ❓To use body parser after Express 4.6 before use body-parser library
app.use(express.json());

// ❓Using GET method to get data from MongoDB
app.get("/", async (req, res) => {
  let data = await Connection();
  data = await data.find().toArray();
  res.send(data);
});

// ❓Using POST method to insert data to MongoDB
app.post("/", async (req, res) => {
  let data = await Connection();
  let result = await data.insertOne(req.body);
  if (result.acknowledged) {
    console.log("Data is inserted");
  } else {
    console.log("Data is not inserted");
  }
  res.send(result);
});

// ❓Using put method to update data in MongoDB
app.put("/", async (req, res) => {
  let data = await Connection();
  let result = await data.updateOne({ name: "Pritam8" }, { $set: req.body });
  if (result.acknowledged) {
    if (result.modifiedCount > 0) {
      console.log("Data is updated successfully");
    } else {
      console.log("No such data to update");
    }
  } else {
    console.log("Data is not updated");
  }
  res.send("Put method");
});

// ❓Using delete method to delete data in MongoDB
app.delete("/", async (req, res) => {
  let data = await Connection();
  let result = await data.deleteOne({ name: "Pritam67" });
  if(result.acknowledged){
    if(result.deletedCount==0){
      console.log("There is no data to delete");
    }
    else{
        console.log("Data is deleted successfully");
    }
  }
  else{
    console.log("Data is not deleted")
  }
  res.send("Delete data");
})

app.listen(PORT, hostname, () => {
  console.log(`Server is running on http://${hostname}:${PORT}`);
});
