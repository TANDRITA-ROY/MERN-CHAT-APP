const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("AI Is Running Fine!");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});
app.get("/api/chats/:id", (req, res) => {
  //console.log(req);
  const singleuser = chats.find((c) => c._id == req.params.id);
  res.send(singleuser);
});
app.listen(PORT, console.log(`Server stared at port ${PORT}`));
