const { Quiz } = require("../models/quiz.model");
const { quizzes } = require("../data/quiz-data");

module.exports.seedDatabase = async (req, res) => {
  const response = await Quiz.create(quizzes);

  res.json({ success: true, response });
}

module.exports.getAllQuizzes = async (req, res) => {
  const quizzes = await Quiz.find({}).lean();

  res.json({ success: true, quizzes });
}