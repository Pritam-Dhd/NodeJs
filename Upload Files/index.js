// ❗Upload Files

const express = require("express");
const multer = require("multer");

const app = express();

const PORT = 4000;
const hostname = "localhost";

// A middleware function to handle the file upload
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // ❓ Set the destination directory for uploaded files
      cb(null, "Upload Files");
    },
    filename: (req, file, cb) => {
      // ❓Generate a unique filename for each uploaded file
      cb(null, file.fieldname + "-" + Date.now() + ".png");
    },
  }),
}).single("user_file");

app.post("/upload", upload, (req, res) => {
  res.send("Upload");
});

app.listen(PORT, hostname, () => {
  console.log(`Server is running on http://${hostname}:${PORT}`);
});
