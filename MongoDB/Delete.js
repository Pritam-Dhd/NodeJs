// ❗ To delete the data in MongoDB

const Connection = require("./Connection");

const Delete = async () => {
  const db = await Connection();
  const result = await db.deleteMany(
    {
        name:"adasdasdas"
    }
  );
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
};

Delete();
