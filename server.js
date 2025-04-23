const express = require("express");
const dotenv = require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();
const port = process.env.PORT || 5000;

const errorHandler = require("./middleware/errorhandler");

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server runing on the port ${port}`);
});
