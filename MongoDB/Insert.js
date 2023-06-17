// ❗ To insert data in MongoDB

const Connection = require("./Connection");

const insert = async () => {
  const db = await Connection();
  const result = await db.insertMany([
    {
      name: "Pritam3",
      email: "pritam3@gmail.com",
    },
    {
      name: "Pritam4",
      email: "pritam4@gmail.com",
    },
    {
      name: "Pritam5",
      email: "pritam3@gmail.com",
    },
  ]);
  if(result.acknowledged){
    console.log("Data is inserted")
  }
  else{
    console.log("Data is not inserted")
  }
};

insert();
