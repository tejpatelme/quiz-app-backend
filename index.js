const express = require("express");
const cors = require("cors");
const {connectToDatabase} = require("./db/db-connection");
const {routeNotFound, errorHandler} = require("./middlewares");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

app.get("/", (req, res) => res.send("API for jarvis-quiz application"));

/**
 * 404 Router Handler.
 * Do not move, this needs to be the last route.
 */
app.use(routeNotFound);

/**
 *Error Handler
 */
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
