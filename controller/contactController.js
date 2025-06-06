const asyncHandler = require("express-async-handler");
const { constants } = require("../constants");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route GET /api/contacts
// @access private

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

// @desc Create New contacts
// @route POST /api/contacts
// @access private

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
    user_id: req.user.id,
  });

  res.status(201).json(contact);
});

// @desc Get single contact
// @route GET /api/contacts/:id
// @access private

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

  if (contact.user_id.toString() !== req.user.id) {
    res.status(constants.UNAUTHORIZED);
    throw new Error("You don't have permission to update contact");
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

  if (contact.user_id.toString() !== req.user.id) {
    res.status(constants.UNAUTHORIZED);
    throw new Error("You don't have permission to delete contact");
  }

  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(`${contact.name} deleted!`);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
