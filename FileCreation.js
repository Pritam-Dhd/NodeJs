// ❗Creating file using CLI arguments

// const fs= require('fs');

// const input=process.argv;

// if(input[2]=='add'){
//     fs.writeFile(input[3],input[4],(err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("File created successfully");
//         }
//     })
// }
// else if (input[2]=='delete'){
//     fs.unlink(input[3],(err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("File deleted successfully");
//         }
//     })
// }
// else if(input[2]=='read'){
//     fs.readFile(input[3],'utf-8',(err,data)=>{
//         if(err){
//             console.error(err)
//         }
//         else{
//             console.log(data)
//         }
//     })
// }
// else{
//     console.log("Invalid Input")
// }

// ❗Creating file in different folder using CLI arguments

const fs = require("fs");
const path = require("path");
const dirpath= path.join(__dirname,'Files');

// ❓Creating file 

// for(i=0;i<5;i++){
//     fs.writeFile(dirpath+`/Hello${i}.txt`, `Hello ${i}`, (err) => {
//         if(err){
//             console.log("Error Creating file")
//         }
//         else{
//             console.log("File created successfully");
//         }
//     })
// }

// ❓Reading File
fs.readdir(dirpath,'utf-8',(err,files)=>{
    if(err){
        console.log(err);
    }
    else{
        // For printing in array
        // console.log(files)

        // For printing seperately
        files.forEach((items)=>{
            console.log("File name is: "+items);
        })
    }
})