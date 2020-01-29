const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session)
// const PORT = process.env.PORT || 5000;
const app = express();
const axios = require("axios")
require('dotenv').config()

const {
  HOST,
  PORT,
  SESS_SECRET,
  NODE_ENV,
  IS_PROD,
  COOKIE_NAME
} = require("./config/config");
const { MongoURI } = require("./config/database");

const MAX_AGE = 1000 * 60 * 60 * 3; // Three hours
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI || `mongodb://${process.env.DB_USER}:${process.env.DB_PW}@ds253418.mlab.com:53418/trade_pals_db`, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// });

mongoose.connect(MongoURI, {
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

const mongoDBstore = new MongoDBStore({
  uri: MongoURI,
  collection: "mySessions"
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    name: COOKIE_NAME, //name to be put in "key" field in postman etc
    secret: SESS_SECRET,
    resave: true,
    saveUninitialized: false,
    store: mongoDBstore,
    cookie: {
      maxAge: MAX_AGE,
      sameSite: false,
      secure: IS_PROD
    }
  })
);


app.use("/api", require("./routes/api/users.js"));


app.get("/", (req, res) => {
  res.send("Welcome to your home page")
})

app.post("/yelp", async (req, res) => {
  console.log(req.body)
  const {lat, lng} = req.body
  // get values from user input
  // get location from browser geolocation || input/req
  // radius default || user/req
  let searchTerm = "animal shelter"
  // let lat = "40.742953799999995";
  // let lng = "-73.9900555";
  let radius = "1609";
  const response = await axios({
    method: 'get',
    url:`https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=${lat}&longitude=${lng}&radius=${radius}`,
    headers: { "Authorization": `bearer ${process.env.YELP_KEY}` }
  })
  res.json(response.data)
})

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server started on http://${HOST}:${PORT}`);
});



/**
 * THE BUSINESS WEBSITE FROM YELP
 * 
 * document.querySelector(".main-content-wrap").children[0].children[0].children[2].firstChild.firstChild.children[1].children[1].firstChild.firstChild.firstChild.firstChild.children[0].firstChild.children[1].children[1]
 */