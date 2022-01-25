// const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')

// const userSchema = mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         email: {
//             type: String,
//             required:true,
//             unique: true,
//         },
//         password: {
//             type: String,
//             required: true,
//         },
//         isAdmin: {
//             type: Boolean,
//             required: true,
//             default: false,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

// userSchema.pre('save', async function (next) {
//     if(this.isModified('password')) {
//         next();
//     }

//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password,salt);
// });

// userSchema.methods.matchPassword=async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// const User=mongoose.model('User',userSchema);

// module.exports = User;

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "100d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: passwordComplexity().required(),
  });
  return schema.validate(data);
};

module.exports = { User, validate };