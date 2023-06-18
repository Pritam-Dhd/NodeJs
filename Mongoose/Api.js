const express = require("express");

require("./Connection");
const model = require("./Schema");
const app = express();

app.use(express.json());

const PORT = 4000;
const hostname = "localhost";

// ❓Using POST method to insert data to MongoDB
app.post("/", async (req, res) => {
  try {
    let data = await model.create(req.body);
    console.log("Data is inserted");
  } catch (err) {
    console.log("Error while inserting data:", err);
  }
  res.send("Welcome");
});

// ❓Using GET method to get data from MongoDB
app.get("/", async (req, res) => {
  let data = await model.find();
  res.send(data);
});

// ❓Using delete method to delete data in MongoDB
app.delete("/", async (req, res) => {
  let result = await model.deleteOne({ name: "Pritam67" });
  if (result.acknowledged) {
    if (result.deletedCount == 0) {
      console.log("There is no data to delete");
    } else {
      console.log("Data is deleted successfully");
    }
  } else {
    console.log("Data is not deleted");
  }
  res.send(result);
});

// ❓Using put method to update data in MongoDB
app.put("/", async (req, res) => {
  let data = await model.updateOne(
    { name: "Pritam10" },
    { $set: { name: "Pritam9" } }
  );
  if (data.acknowledged) {
    if (data.modifiedCount < 0) {
      console.log("There is no data to update");
    } else {
      console.log("Data is updated successfully");
    }
  } else {
    console.log("Data is not deleted");
  }
  res.send(data);
});

app.listen(PORT, hostname, () => {
  console.log(`Server is running on http://${hostname}:${PORT}`);
});
