const router = require("express").Router();
const User = require("../models/User.js");

router.get("/user", async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (err) {
    console.error({ message: err})
    res.status(404)
  }
})

router.post("/user", async (req, res) => {
  const { username, email, bio, image } = req.body
  console.log(username, email)
  try {
    const user = new User({
      username,
      email
    }) 
    
  } catch (err) {
    
  }
})

module.exports = router;