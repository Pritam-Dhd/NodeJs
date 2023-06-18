const express = require("express");

require("./Connection");
const model = require("./Schema");
const app = express();

app.use(express.json());

const PORT = 4000;
const hostname = "localhost";

app.get("/search/:key", async (req, res) => {
  let data = await model.find({
    $or: [
      { name: { $regex: req.params.key } },
      { email: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});

app.listen(PORT, hostname, () => {
  console.log(`Server is running on http://${hostname}:${PORT}`);
});
