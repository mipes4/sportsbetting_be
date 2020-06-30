require("dotenv").config();
const express = require("express");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const predictionRouter = require("./routers/predictions");

const app = express();

app.use("/predictions", predictionRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
