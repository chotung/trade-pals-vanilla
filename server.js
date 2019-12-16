const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config()

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || `mongodb://${process.env.DB_USER}:${process.env.DB_PW}@ds253418.mlab.com:53418/trade_pals_db`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',() => {
  console.log("Connected to Database")
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use("/api", require("./routes/userRoutes.js"));

app.get("/", (req, res) => {
  res.send("Welcome to your home page")
})

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});