const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connection = require("./db");
const guestRouter = require("./routes/guestRouter");
const adminRoute = require("./routes/adminRoute");

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/guests", guestRouter);
app.use("/admin", adminRoute);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

app.listen(port, async () => {
  try {
    await connection;
    console.log(`Server is running on port: ${port}`);
  } catch (error) {
    console.log(`Error while starting the server: ${error}`);
  }
});
