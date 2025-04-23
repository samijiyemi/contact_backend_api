const asyncHandler = require("express-async-handler");
const { constants } = require("../constants");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @desc Create New contacts
// @route POST /api/contacts
// @access public

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(constants.BAD_REQUEST); // Set status code
    throw new Error("All fields are required!"); // Throw error
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(201).json(contact);
});

// @desc Get single contact
// @route GET /api/contacts/:id
// @access public

const getContact = asyncHandler(async (req, res) => {
  // find contact if exist
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(constants.NOT_FOUND);
    throw new Error("Contact not found");
  }

  res.status(200).json(contact);
});

// @desc Update a single contact with particular id
// @route PUT /api/contacts/:id
// @access private

const updateContact = asyncHandler(async (req, res) => {
  // find contact if exist
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(constants.NOT_FOUND);
    throw new Error("Contact not found");
  }

  // if contact exist update
  const updated_contact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updated_contact);
});

// @desc Delete a single contact with particular id
// @route DELETE /api/contacts/:id
// @access private

const deleteContact = asyncHandler(async (req, res) => {
  // find contact if exist
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(constants.NOT_FOUND);
    throw new Error("Contact not found");
  }

  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json(`${contact.name} deleted!`);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
