const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.MONGODB_URI;

mongoose
  .connect(PORT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database Connected Successfully."))
  .catch((err) => console.log(err));
