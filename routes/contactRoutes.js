import express from "express";
const router = express.Router();
import {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} from "../controller/contactController.js";

// Get all contacts and create new contact
router.route("/").get(getContacts).post(createContact);

// get single contact, update and delete
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

export default router;
