import express from "express";
const router = express.Router();

// Get all contacts
router.route("/").get((req, res) => {
  res.status(200).json({ msg: "Get all contacts" });
});

// create a new contact
router.route("/").post((req, res) => {
  res.status(200).json({ msg: "create contact" });
});

// get single contact
router.route("/:id").get((req, res) => {
  res.status(200).json({ msg: `single contact with ${req.params.id}` });
});

// update a single contact with particular id
router.route("/:id").put((req, res) => {
  res.status(200).json({ msg: `update a contact with ${req.params.id}` });
});

// delete a contact
router.route("/:id").delete((req, res) => {
  res.status(200).json({ msg: `delete a contact with ${req.params.id}` });
});

export default router;
