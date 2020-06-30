require("dotenv").config();
const express = require("express");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");

const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
s;
