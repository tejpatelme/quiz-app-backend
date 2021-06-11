require("express-async-errors");
const { Router } = require("express");
const { checkIfUserExists, validateEmail, validatePassword } = require("../middlewares");
const { logInUser, signUpUser } = require("../controllers/user.controller");

const router = Router();

router.route("/signup").post(validateEmail, checkIfUserExists, validatePassword, signUpUser);

router.route("/login").post(logInUser);

module.exports = router;