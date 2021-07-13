require("express-async-errors");
const { Router } = require("express");
const { checkIfUserExists, validateEmail, validatePassword, verifyToken } = require("../middlewares");
const { logInUser, signUpUser, getUserById } = require("../controllers/users.controller");
const { saveResult, updateResult } = require("../controllers/users.controller");

const router = Router();

router.route("/user").get(verifyToken, getUserById);
router.route("/signup").post(validateEmail, checkIfUserExists, validatePassword, signUpUser);
router.route("/login").post(logInUser);
router.route("/result/save").post(verifyToken, saveResult)
router.route("/result/update").post(verifyToken, updateResult);

module.exports = router;