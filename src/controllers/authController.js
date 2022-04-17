const User = require("../models/usermodel");

require("dotenv").config();

const jwt = require("jsonwebtoken");

const newToken = (user) => {
  return jwt.sign({ user }, "process.env.jwt_sec_key");
};

const register = async (req, res) => {
  try {
    let user_data = await User.find({ email: req.body.email }).lean().exec();
    console.log(user_data);

    if (user_data.length !== 0) {
      return res
        .status(400)
        .send({ message: "account already exist" });
    }

    user_data = await User.create(req.body);

    const token = newToken(user_data);

    res.send({ user_data, token });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const login = async (req,res) => {
  try {
    const user_data = await User
      .findOne({ email: req.body.email })
     

    if (!user_data) {
      return res
        .status(400)
        .send({ message: "your email or password is wrong" });
    }

    const match = user_data.checkPassword(req.body.password);

    if (!match) {

      return res
        .status(400)
        .send({ message: "your email or password is wrong" });
    }

    const token = newToken(user_data);

    res.send({user_data,token});

  } catch (e) {
    res.status(400).send(e.message);
  }
};



module.exports = { register, login ,newToken};