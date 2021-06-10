const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: "Name is required"
  },
  email: {
    type: String,
    required: "Email is requried"
  },
  password: {
    type: String,
    required: "Password is required"
  }
})

const User = model("User", UserSchema);

module.exports = { User }