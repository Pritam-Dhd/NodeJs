// ❗Middleware is a function which works with routes to modifies the request and response. 
// ❗It is mostly used for checking the authentication, check the age, block sites in certain countries.

// ❗Types of routes are
// 1. Application-level middleware - Applies middware to all the routes
// 2. Route-level middleware - Applies middleware to specific routes  
// 3. Error-handling middleware
// 4. Build-in middleware
// 5. Third-party middleware

const express= require("express");
const reqFilter1= require("./Middleware")
// ❓To use same middleware in different routes in same time
const route=express.Router();


const app= express();
const PORT=4000;
const hostname='localhost'

// ❓  Application-level Middleware
const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please enter your age");
    }
    else if(req.query.age<18){
        res.send("You cannot access this page");
    }
    else{
        next();
    }
   
}
// ❓To use same middleware in different routes in same time
route.use(reqFilter);  

// ❓To use the middleware in all routes
// app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send("Welcome to Home Page")
})

// ❓To use the middleware in specific routes use the reqFilter in that specific route
app.get('/users',reqFilter,(req,res)=>{
    res.send("Welcome to Users Page")
})

// ❓To use same middleware in different routes easily
route.get('/contact',(req,res)=>{
    res.send("Welcome to Contact Page")
})
route.get('/register',(req,res)=>{
    res.send("Welcome to Register Page")
})

// ❓To use same middleware in different routes easily
app.use('/',route)

app.get('/about',reqFilter1,(req,res)=>{
    res.send("Welcome to About Page")
})


app.listen(PORT,hostname,()=>{
    console.log(`Server is running on http://${hostname}:${PORT}`);
})