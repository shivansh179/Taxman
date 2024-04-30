const express = require("express");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

require("./db/connection");
const UserModel = require("./Models/User");

app.get("/getUsers", function (req, res) {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/", async (req, res) => {
  console.log(req.body);
  let user = new UserModel({
    concern: req.body.concern,
  });

  let result = await user.save();
  res.send(result);
});

app.listen(4000, () => {
  console.log("App is running");
});
