const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  concern: String,
});

const UserModel = mongoose.model("Members", usersSchema);
module.exports = UserModel;
