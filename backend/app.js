const express = require("express");
const app = express();
require("dotenv/config");

const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(express.json());
app.use(morgan("tiny"));

const userRoutes = require("./routes/user.routes");
const itemRoutes = require("./routes/item.routes");

app.use("/user", userRoutes);

app.use("/item", itemRoutes);

mongoose
  .connect(process.env.Connection_String, {
    dbname: "Donewithit",
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
