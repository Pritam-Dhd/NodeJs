// ❗Usinf EJS Temlate for dynamic routing or dynamic html page

const express = require("express");
const path = require("path");

const app = express();

const PORT = 4000;
const hostname = "localhost";

const users=[];

// ❓To use static files
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended:true})); 
// ❓To tell Nodejs about using EJS
app.set("view engine", "ejs");

app.get("/profile", (req, res) => {
  const user = {
    name: "Pritam",
    email: "pritam@gmail.com",
    skills: ["html", "css", "react", "node", "php"],
  };
  res.render("Profile", { user });
});

app.get("/login", (req, res) => {
  res.render("Login");
});

app.get("/form", (req, res) => {
  res.render("Form");
});
app.get("/success", (req, res) => {
  res.render("Success");
});


app.post("/form", (req, res) => {
  users.push({username:req.body.name,email:req.body.email});  
  // res.render("Success")
  res.redirect("/success");
});

app.listen(PORT, hostname, () => {
  console.log(`Server is running on http://${hostname}:${PORT}`);
});
