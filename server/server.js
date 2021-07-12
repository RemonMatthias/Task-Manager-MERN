const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postRoutes = require("./routes/posts.js");

const app = express();

dotenv.config();

// middleware

app.use(cors());
app.use(express.json({ limit: "2MB" }));

// importing routes

app.use("/posts", postRoutes);

//Homepage

app.get("/", (req, res) => {
  res.send("Welcome To Your Task Manager");
});

// connection to database and initiating server

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
