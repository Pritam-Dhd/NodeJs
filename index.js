// ❗❗ Nodemon is a third party module which is used to run the file automatically when we save the file.

// ❗File based module

// const a={
//     average:(a,b)=>{
//         console.log((a+b)/2);
//     },
//     percent:(a,b)=>{
//         console.log((a/b)*100);
//     },
// };

// module.exports=a;


// ❗Build in module

// const fs = require("fs");
// const a=fs.readFileSync("./Sample2.txt", "utf-8",)
// console.log(a);

// fs.readFile("./Sample.txt", "utf-8",(err,data)=>{
//     if(err){
//         return err;
//     }
//     console.log(data);
// })

// console.log("Show First");

// ❗Build in module direct import
// const { writeFile } = require("fs");

// writeFile("Sample3.txt", "Hello World", (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//   } else {
//     console.log("File written successfully");
//   }
// });


// ❗Third Party module of pokemon

// const pokemon=require("pokemon");

// console.log(pokemon.random());
// console.log(pokemon.getName(342));
// console.log(pokemon.getId("Litten"));

// ❗Node Server
const http=require("http");
const fs=require("fs");

const PORT=4000;
const hostname="localhost";
const home=fs.readFileSync("./index.html");

const server=http.createServer((request, response)=>{
    if(request.url==="/"){
        return response.end(home);
    }
    else if(request.url==="/about"){
        return response.end(" <h1>About Page<h1>");
    }
    else if(request.url==="/service"){
        return response.end(" <h1>Service Page</h1>");
    }
    else{
        return response.end(" <h1>404 Page not found</h1>");
    }
    
})

server.listen(PORT,hostname,()=>{
    console.log(`Server is running on http://${hostname}:${PORT}`);
})
