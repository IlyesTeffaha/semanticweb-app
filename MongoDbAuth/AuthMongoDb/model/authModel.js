const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
  username: {
    type: String,
   
  },
  role: {
    type: String,
   
  },
  birthday: {
    type:Date,
   
  },
  address: {
    type: String,
   
  },
  PostalCode: {
    type:Number,
   
  },
  PhoneNumber: {
    type: Number,
   
  },

  currentstatus: {
    type: String,
   
  },
  gender: {
    type: String,
   
  },
  file: {
    type: String,
   
  },
  isverified: {
    type: Boolean,
   
  },
  image: {
    type: String,
   
  },
  activationcode: {
    type: String,
   
  },
  state: {
    type: String,
   
  },
  city: {
    type: String,
   
  },
});

// userSchema.pre("save", async function (next) {
//   const salt = await bcrypt.genSalt();
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// userSchema.statics.login = async function (email, password) {
//   const user = await this.findOne({ email });
//   if (user) {
//     const auth = await bcrypt.compare(password, user.password);
//     if (auth) {
//       return user;
//     }
//     throw Error("incorrect password");
//   }
//   throw Error("incorrect email");
// };

module.exports = mongoose.model("Users", userSchema);
