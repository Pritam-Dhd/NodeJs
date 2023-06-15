// ❗Usinf EJS Temlate for dynamic routing or dynamic html page

const express = require("express");
const path = require("path");

const app = express();

const PORT = 4000;
const hostname = "localhost";

// ❓To tell Nodejs about using EJS
app.set("view engine", "ejs");

app.get("/profile", (req, res) => {
  const user = {
    name: "Pritam",
    email: "pritam@gmail.com",
    skills:['html','css','react','node','php']
  };
  res.render("Profile",{user});
});

app.get("/login", (req, res) => {
    res.render("Login");
  });

app.listen(PORT, hostname, () => {
  console.log(`Server is running on http://${hostname}:${PORT}`);
});
