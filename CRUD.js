// Create, Read, Update and Delete File

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "Files");
const filePath = `${dirPath}/File.txt`;

// ❗Creating file
// fs.writeFile(filePath, "Hello World", (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//   } else {
//     console.log("File written successfully");
//   }
// });

// ❗Read file
// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// ❗Update file
fs.appendFile(filePath, "\nHello World", (err) => {
  if (err) {
    console.log(err);
  }
  else{
    console.log("Updated successfully")
  }
});

// ❗Rename file
// fs.rename(filePath, `${dirPath}/File2.txt`, (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Renamed successfully");
//     }
// })

// ❗Delete file
// fs.unlinkSync(`${dirPath}/File2.txt`,(err){
//     if(err){
//         console.log("Error deleting file")
//     }
//     else{
//         console.log("Deleted successfully")
//     }
// });