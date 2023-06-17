// ❗Using mongooose to connect to MongoDB
const mongoose=require('mongoose');

// ❓Connecting to MongoDB with database name Student
mongoose.connect('mongodb://127.0.0.1:27017/Student').then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log('Error while connecting to MongoDB',err);
})

// ❓Creating a Schema for the collection
const student = mongoose.Schema({
    name:String,
    email:String,
})

// ❓Creating a model for the collection
const Student = mongoose.model("students",student);

// ❓Adding a document to the collection
const add=async()=>{
    // ❗Using save() method

    // const ss=new Student({
    //     name:"Pritam6",
    //     email:"pritam6@gmail.com",
    // })
    // await ss.save();

    // ❗Using create() method
    try {
        // ❗Using create() method
        const ss = await Student.create({
            name: "Pritam6",
            email: "pritam6@gmail.com",
        });
        // Display success message
        console.log("Data is inserted"); 
    } catch (err) {
        // Display error message
        console.log("Error while inserting data:", err); 
    }
}

add();