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
    const user = await new User({
      username,
      email
    }) 
    user.setPassword(password)
    user.save()
    res.json(user)
  } catch (err) {
    
  }
})


router.put("/users/:id", async (req, res) => {
 try {
   const updateUser = await User.findOneAndUpdate
 } catch (error) {
   
 } 
})


router.delete("/users/:id", async (req, res) => {
  // How do I actually want to delete my account????
  try {
    User.findOneAndDelete({_id:req.params.id}, (err, data) => {
      if(data) {
        res.json({ message: "Your Account Has Been Deleted"})
      } else {
        res.json({ message: "Account does not exist"})
      }
    })
  } catch (err) {
    console.error({ message: err})
  }
}) 




module.exports = router;