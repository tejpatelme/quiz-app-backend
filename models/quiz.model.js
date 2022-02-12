const { Schema, model } = require("mongoose");

const OptionSchema = new Schema({
  option: {
    type: String,
    required: "Option is required"
  },
  isRight: {
    type: Boolean,
    required: "Is option right is required"
  }
});

const QuestionSchema = new Schema({
  question: {
    type: String,
    required: "Question is required"
  },
  imageURL: {
    type: String,
    requried: "Image URL is required"
  },
  options: [OptionSchema]
}, { _id: false });

const QuizSchema = new Schema({
  imageURL: {
    type: String,
    required: "Image URL is required"
  },
  name: {
    type: String,
    required: "Quiz name is required"
  },
  questions: [QuestionSchema]
});

const Quiz = model("Quiz", QuizSchema);

module.exports = { Quiz, OptionSchema };

