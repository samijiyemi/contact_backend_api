// @desc Get all contacts
// @route GET /api/contacts
// @access public

export const getContacts = (req, res) => {
  res.status(200).json({ msg: "Get all contacts" });
};

// @desc Create New contacts
// @route POST /api/contacts
// @access public

export const createContact = (req, res) => {
  res.status(201).json({ msg: "create new contact" });
};

// @desc Get single contact
// @route GET /api/contacts/:id
// @access public

export const getContact = (req, res) => {
  res.status(200).json({ msg: `single contact with ${req.params.id}` });
};

// @desc Update a single contact with particular id
// @route PUT /api/contacts/:id
// @access private

export const updateContact = (req, res) => {
  res.status(200).json({ msg: `update a contact with ${req.params.id}` });
};

// @desc Delete a single contact with particular id
// @route DELETE /api/contacts/:id
// @access private

export const deleteContact = (req, res) => {
  res.status(200).json({ msg: `delete a contact with ${req.params.id}` });
};
