import express from "express";
import dotenv from "dotenv";

// routes
import contactRoutes from "./routes/contactRoutes.js";

// load env variable
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

app.use("/api/contacts", contactRoutes);

app.listen(port, () => {
  console.log(`server runing on the port ${port}`);
});
