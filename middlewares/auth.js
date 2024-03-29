const jwt = require("jsonwebtoken");
const validator = require("validator");
const { User } = require("../models/user.model");

const checkIfUserExists = async (req, res, next) => {
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

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const isEmail = validator.isEmail(email);

  if (!isEmail) {
    return res
      .status(401)
      .json({ success: false, errorMessage: "Email is invalid" });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  const isStrongPassword = validator.isStrongPassword(password, { minSymbols: 0, minUppercase: 0, minNumbers: 0 });

  if (!isStrongPassword) {
    return res
      .status(401)
      .json({ success: false, errorMessage: "Password should be 8 characters or long" });
  }

  next();
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
  req.userId = decodedToken.userId;

  next();
};

module.exports = { validateEmail, validatePassword, verifyToken, checkIfUserExists };