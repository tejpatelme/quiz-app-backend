const { Schema, model } = require("mongoose");
const { OptionSchema } = require("./quiz.model")

const AttemptedQuestion = new Schema({
  question: String,
  imageURL: String,
  options: [OptionSchema],
  selectedOption: OptionSchema
}, { id: false })

const TakenQuiz = new Schema({
  quizId: {
    type: Schema.Types.ObjectId,
    ref: "Quiz"
  },
  score: Number,
  attemptedQuestions: [AttemptedQuestion]
})

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
  },
  takenQuiz: [TakenQuiz],
})

const User = model("User", UserSchema);

module.exports = { User }