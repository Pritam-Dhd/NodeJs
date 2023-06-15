// ❗Using Express Framework

const express= require('express');
const path= require('path');
const router=require('./UserRoutes')
const bodyParas=require('body-parser');

// Creating a server 
const app = express();

const PORT=4000;
const hostname='localhost'
const filePath=path.join(__dirname)

// ❓CRUD in API (http methods)
// Get= To get form the database, 
// Post= To create in the database, 
// Put = To update in the database,
// Delete= To delete in the database

// To get the data from the form
app.use(bodyParas.urlencoded({extended:true})); 

// To use json data
app.use(express.json())

// To use Routes
app.use(router) 

// ❓To open static files in the browser or html files
// app.use(express.static(filePath))

// Routes
app.get('/',(req,res)=>{
    // res.send(' <h1>Hello World</h1> ')
    res.sendFile(filePath+'/index.html')
})  

app.get('/home',(req,res)=>{
    res.send(`<h1>Home Page</h1><a href="/about">About</a>`)
})

// Use req.body to take data from the form whereas use req.query to take from the url 

app.post('/login',(req,res)=>{
    res.send(`<h1>Login</h1> <h2>Hello ${req.body.name}. Your Email = ${req.body.email} and Your password = ${req.body.password}<h2>`);
})


app.get('/about',(req,res)=>{
    res.send(` <h1>About Page</h1> <input placeholder="Enter Your Name" type="text" name="name" id="name" value=${req.query.name}/> `)
})

// Json data
app.get('/json',(req,res)=>{
    res.json({
        name:'Home',
        email:"abc@gmail.com",
        password:"password"
    })
})

// * is used for showing 404 error page
app.get('*',(req,res)=>{
    res.send(`<h1>404 Error Page not found</h1> <h2><a href="/home">Go to Home page</a></h2>`)
})

// Listening the server
app.listen(PORT,hostname,()=>{
    console.log(`Server is running on http://${hostname}:${PORT}`);
})