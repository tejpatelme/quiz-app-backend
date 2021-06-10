const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.checkIfUserExists = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email: email.toLowerCase() });

  if (user) {
    return res.status(200).json({
      success: false,
      errorMessage:
        "A user with the specified email already exists. Please login instead",
    });
  }

  next();
};


exports.signUpUser = async (req, res) => {
  const user = req.body;

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  const newUser = await User.create({
    name: user.name,
    email: user.email.toLowerCase(),
    password: user.password,
  });

  res.status(201).json({ success: true, newUsert });
};


exports.logInUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const passwordValid = await bcrypt.compare(password, user.password);

    if (passwordValid) {
      const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "24h",
      });

      return res.status(200).json({ success: true, token });
    }
  }

  return res
    .status(401)
    .json({ success: false, errorMessage: "email or password is incorrect" });
};