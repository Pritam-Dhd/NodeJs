const nodemailer = require("nodemailer");
require('dotenv').config();
// Create a transporter using SMTP or some other transport method
const transporter = nodemailer.createTransport({
  service: "gmail",
  port:465,
  secure: true,
  auth: {
    user: process.env.User,
    pass: process.env.Pass,
  },
});

// Define the email data
const mailOptions = {
  from: process.env.User,
  to: "pritamdhaugoda@gmail.com",
  subject: "Hello from Nodemailer",
  text: "This is a test email sent from Nodemailer in Node.js.",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
