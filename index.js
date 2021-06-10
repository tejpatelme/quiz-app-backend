const express = require("express");
const cors = require("cors");
const {connectToDatabase} = require("./db/db-connection");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

app.get("/", (req, res) => res.send("API for jarvis-quiz application"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
