const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { constants } = require("../constants");
const User = require("../models/userModel");
const Joi = require("joi");

// user validation
const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

// @desc Register a new user
// @route POST /api/users/register
// @access public

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const value = await schema.validateAsync({ username, email, password });

  // check if username already existed in the database
  const check_username = await User.findOne({ username });
  if (check_username) {
    res.status(constants.BAD_REQUEST);
    throw new Error("username is been taken!");
  }

  //   check if user is available in the database
  const user_exist = await User.findOne({ email });
  if (user_exist) {
    res.status(constants.BAD_REQUEST);
    throw new Error("User already exist!");
  }

  //   hash the password before saving
  const saltRound = 10;
  const hashed_password = await bcrypt.hash(value.password, saltRound);

  //   create a new user
  const user = await User.create({
    username,
    email,
    password: hashed_password,
  });

  console.log("user: ", user);

  if (user) {
    res.status(201).json({ id: user._id, email: user.email });
  } else {
    res.status(constants.BAD_REQUEST);
    throw new Error("User data is not valid!");
  }
});

// @desc Login user
// @route POST /api/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(constants.BAD_REQUEST);
    throw new Error("All field are required!");
  }

  //   check if user is available in the database
  const user_exist = await User.findOne({ email });
  //   compare the password
  if (user_exist && (await bcrypt.compare(password, user_exist.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user_exist.username,
          email: user_exist.email,
          id: user_exist._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(constants.BAD_REQUEST);
    throw new Error("email or password is invalid");
  }
});

// @desc Get current user
// @route GET /api/users/current
// @access private

const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
