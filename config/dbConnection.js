const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    const connection = await mongoose.connect(url);
    console.log(
      `Database connected: ${connection.connection.host} ${connection.connection.name}`
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
