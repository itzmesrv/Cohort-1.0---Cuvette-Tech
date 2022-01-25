// const express = require('express');
// const { registerUser, authUser } = require('../controllers/userControllers');

// const router = express.Router()

// router.route("/").post(registerUser);
// router.route("/login").post(authUser);

// module.exports=router;
const router = require("express").Router();
const { User, validate } = require("../models/userModels");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(409).send({ message: "Email already registered" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    console.log("const" + salt, "process.env.SALT", process.env.SALT);

    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
module.exports = router;