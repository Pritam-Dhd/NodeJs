// ❗Using mongooose to connect to MongoDB
const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Student').then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log('Error while connecting to MongoDB',err);
})

const student = mongoose.Schema({
    name:String,
    email:String,
})

const Student = mongoose.model("students",student);

const Read=async()=>{
    try {
        const ss = await Student.find();
        console.log(ss);
    } catch (err) {
        console.log("Error:", err); 
    }
}

Read();