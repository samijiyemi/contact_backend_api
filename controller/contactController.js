const asyncHandler = require("express-async-handler");
const { constants } = require("../constants");

// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Get all contacts" });
});

// @desc Create New contacts
// @route POST /api/contacts
// @access public

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(constants.BAD_REQUEST);
    throw new Error("All field are required!");
  }

  res.status(201).json({ msg: "create new contact" });
  console.log(req.body);
});

// @desc Get single contact
// @route GET /api/contacts/:id
// @access public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `single contact with ${req.params.id}` });
});

// @desc Update a single contact with particular id
// @route PUT /api/contacts/:id
// @access private

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `update a contact with ${req.params.id}` });
});

// @desc Delete a single contact with particular id
// @route DELETE /api/contacts/:id
// @access private

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `delete a contact with ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
