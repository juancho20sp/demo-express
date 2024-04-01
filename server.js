const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true })); // para acceder al body
app.use(express.json());

// Routes
const userRouter = require("./routes/users");

app.use("/users", userRouter);
app.use(logger);

// URL - Callback
app.get("/", customLogger, (req, res) => {
  res.send("Im working");
});

app.get("/posts", (req, res) => {
  res.send("Im working posts");
});

// Middleware
function logger(req, res, next) {
  console.log(req.originalUrl + "from logger");
  next();
}

function customLogger(req, res, next) {
  console.log(req.originalUrl + "from custom logger");
  next();
}

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
