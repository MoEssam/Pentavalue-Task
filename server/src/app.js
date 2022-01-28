require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./db/db");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST"],
  })
);

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello PentaValue!");
});

app.listen(port, () => {
  console.log("server is up and running on http://localhost:" + port);
});
