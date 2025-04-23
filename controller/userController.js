const asyncHandler = require("express-async-handler");

// @desc Register a new user
// @route POST /api/users/register
// @access public

const registerUser = asyncHandler(async (req, res) => {
  res.json({ msg: "register the user" });
});

// @desc Login user
// @route POST /api/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ msg: "login the user" });
});

// @desc Get current user
// @route GET /api/users/current
// @access private

const currentUser = asyncHandler(async (req, res) => {
  res.json({ msg: "current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
