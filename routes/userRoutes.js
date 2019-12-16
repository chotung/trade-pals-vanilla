const router = require("express").Router();
const User = require("../models/User.js");

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (err) {
    console.error({ message: err})
    res.status(404)
  }
})

router.post("/users", async (req, res) => {
  const { username, email, password, bio, image } = req.body
  try {
    const user = new User({
      username,
      email
    }) 
    user.setPassword(password)
    user.save()
    res.json(user)
  } catch (err) {
    
  }
})

module.exports = router;