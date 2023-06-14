// ❗Using Express Framework

const express= require('express');
const path= require('path');
const router=require('./UserRoutes')

const bodyParas=require('body-parser');
const app = express();

const PORT=4000;
const hostname='localhost'

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

// Routes
app.get('/',(req,res)=>{
    // res.send(' <h1>Hello World</h1> ')
    res.sendFile(path.join(__dirname+'/index.html'))
})  

app.post('/login',(req,res)=>{
    res.send(`<h1>Login</h1> <h2>Hello ${req.body.name}. Your Email = ${req.body.email} and Your password = ${req.body.password}<h2>`);
})


app.get('/about',(req,res)=>{
    res.send(' <h1>About Page</h1> ')
})

// Json data
app.get('/json',(req,res)=>{
    res.json({
        name:'Home',
        email:"abc@gmail.com",
        password:"password"
    })
})

// Listening the server
app.listen(PORT,hostname,()=>{
    console.log(`Server is running on http://${hostname}:${PORT}`);
})