const mongooose = require("mongoose");

mongooose.connect("mongodb://127.0.0.1:27017/Student");
const Schema = new mongooose.Schema({
  name: String,
  email: String,
});
const model = mongooose.model("students", Schema);

// ❓Insert data in MongoDB using mongoose
const Insert = async () => {
  try {
    let data = await model.create({
      name: "Pritam8",
      email: "pritam8@gmail.com",
    });
    console.log("Data is inserted");
  } catch (err) {
    console.log("Error while inserting data:", err);
  }
};

// ❓Update data in MongoDB using mongoose
const Update = async () => {
  try {
    let data = await model.updateOne(
      { name: "Pritam9" },
      { $set: { name: "Pritam8" } }
    );
    if (data.modifiedCount > 0) {
      console.log("Data is updated");
    } else {
      console.log("No data to update");
    }
  } catch (err) {
    console.log("Error while inserting data:", err);
  }
};

// ❓Delete data in MongoDB using mongoose
const Delete = async () => {
  try {
    let data = await model.deleteOne(
      { name: "Pritam9"}
    );
    if (data.deletedCount > 0) {
      console.log("Data is deleted");
    } else {
      console.log("No data to delete");
    }
  } catch (err) {
    console.log("Error while deleting data:", err);
  }
};

// ❓Read data in MongoDB using mongoose
const Read = async () => {
    try {
      let data = await model.find();
      console.log(data);
    } catch (err) {
      console.log("Error while deleting data:", err);
    }
  };

Read();
