// ❗ To update the data in MongoDB

const Connection = require("./Connection");

const Update = async () => {
  const db = await Connection();
  const result = await db.updateMany(
    { name: "Pritam5" },
    { $set: { email: "pritam5@gmail.com" } }
  );
  if(result.acknowledged){
    console.log("Data is updated successfully")
  }
  else{
    console.log("Data is not updated")
  }
};

Update();
