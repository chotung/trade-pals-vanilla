const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  location: {
    type: String
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

// email
// type: String,
//       lowercase: true,
//       required: [true, "can't be blank"],
//       match: [/\S+@\S+\.\S+/, "is invalid"],
//       index: true

// username
//  type: String,
//       lowercase: true,
//       required: [true, "can't be blank"],
//       match: [/^[a-zA-Z0-9]+$/, "is invalid"],
//       index: true

//     bio: String,
//     image: String,



// const Schema = mongoose.Schema;
// const uniqueValidator = require('mongoose-unique-validator');
// const crypto = require("crypto")
// // const jwt = require('jsonwebtoken');
// require('dotenv').config()

// const UserSchema = new Schema(
//   {
//     username: {
//       type: String,
//       lowercase: true,
//       required: [true, "can't be blank"],
//       match: [/^[a-zA-Z0-9]+$/, "is invalid"],
//       index: true
//     },
//     email: {
//       type: String,
//       lowercase: true,
//       required: [true, "can't be blank"],
//       match: [/\S+@\S+\.\S+/, "is invalid"],
//       index: true
//     },
//     bio: String,
//     image: String,
//     hash: String,
//     salt: String
//   },
//   {
//     timestamps: true
//   }
// );

// UserSchema.plugin(uniqueValidator, {
//   message: 'is already taken.'
// });


// UserSchema.methods.setPassword = function(password) {
//   this.salt = crypto.randomBytes(16).toString('hex'); 
//   this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
// }


// // UserSchema.methods.toAuthJSON = function() {
// //   return {
// //     username: this.username,
// //     email: this.email,
// //     token: this.generateJWT(),
// //     bio: this.bio,
// //     image: this.image 
// //   }; 
// // };

// // UserSchema.methods.generateJWT = function() {
// //   const today = new Date();
// //   const exp = new Date(today);
// //   exp.setDate(today.getDate(),  60);

// //   return jwt.sign({
// //     id: this._id,
// //     username: this.username,
// //     exp: parseInt(exp.getTime() / 1000),
// //   }, secret);
// // };

// const User = mongoose.model("User", UserSchema);

// module.exports = User;