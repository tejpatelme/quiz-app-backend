require("express-async-errors");
const { Router } = require("express");
const { seedDatabase, getAllQuizzes } = require("../controllers/quizzes.controller");

const router = Router();

router.route("/").get(getAllQuizzes);
router.route("/seed").post(seedDatabase);

module.exports = router;