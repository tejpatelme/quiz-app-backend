const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


exports.signUpUser = async (req, res) => {
  const user = req.body;
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  const newUser = await User.create({
    name: user.name,
    email: user.email.toLowerCase(),
    password: user.password,
    takenQuiz: []
  });

  res.status(201).json({ success: true, newUser });
};


exports.logInUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email.toLowerCase() });

  if (user) {
    const passwordValid = await bcrypt.compare(password, user.password);

    if (passwordValid) {
      const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "24h",
      });

      user.password = undefined;
      user.__v = undefined;

      return res.status(200).json({ success: true, token, user });
    }
  }

  return res
    .status(401)
    .json({ success: false, errorMessage: "email or password is incorrect" });
};

module.exports.getUserById = async (req, res) => {
  const { userId } = req;

  const user = await User.findById(userId).select("-password -__v").populate({
    path: "takenQuiz",
    populate: {
      path: "quizId",
      select: "name questions"
    }
  })

  res.status(200).json({ success: true, user });
}

module.exports.saveResult = async (req, res) => {
  const { userId } = req;
  const { result } = req.body;

  let user = await User.findById(userId);

  user.takenQuiz.push(result);
  user.save();

  user = await user.populate({
    path: "takenQuiz",
    populate: {
      path: "quizId",
      select: "name questions"
    }
  }).execPopulate();

  res.status(200).json({ success: true, takenQuiz: user.takenQuiz });
}

module.exports.updateResult = async (req, res) => {
  const { userId } = req;
  const { retakenQuiz } = req.body;

  let user = await User.findById(userId);
  const resultIndex = user.takenQuiz.findIndex((result) => String(result.quizId) === String(retakenQuiz.quizId));

  user.takenQuiz[resultIndex] = retakenQuiz;
  await user.save();

  user = await user.populate({
    path: "takenQuiz",
    populate: {
      path: "quizId",
      select: "name questions"
    }
  }).execPopulate();

  res.status(200).json({ success: true, takenQuiz: user.takenQuiz });
}